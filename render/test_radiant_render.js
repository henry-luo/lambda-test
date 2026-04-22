#!/usr/bin/env node
/**
 * test_radiant_render.js
 *
 * Pixel-level visual regression test runner for Radiant rendering engine.
 * Renders each test page via lambda.exe, then compares the output PNG
 * against the browser reference PNG using pixelmatch.
 *
 * Usage:
 *   node test_radiant_render.js                         # Run all tests
 *   node test_radiant_render.js --test bg_color_01      # Run one test
 *   node test_radiant_render.js --pattern gradient      # Run matching tests
 *   node test_radiant_render.js --threshold 1.0         # Custom mismatch %
 *   node test_radiant_render.js -j 4                    # Parallel workers
 *   node test_radiant_render.js -v                      # Verbose output
 *   node test_radiant_render.js --json                  # JSON output for CI
 *   node test_radiant_render.js --baseline               # Only fail on baseline regressions
 */

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');
const pixelmatchModule = require('pixelmatch');
const pixelmatch = pixelmatchModule.default || pixelmatchModule;
const { PNG } = require('pngjs');

// ─── Directories ────────────────────────────────────────────────────────────

const TEST_DIR    = __dirname;
const PROJECT_ROOT = findProjectRoot();
const PAGE_DIR    = path.join(TEST_DIR, 'page');
const REF_DIR     = path.join(TEST_DIR, 'reference');
const OUTPUT_DIR  = path.join(TEST_DIR, 'output');
const DIFF_DIR    = path.join(TEST_DIR, 'diff');

const LAMBDA_EXE  = path.join(PROJECT_ROOT, 'lambda.exe');

// Locate the Lambda project root.
// Priority: LAMBDA_ROOT env var (set by Makefile), then scan parent directories.
function findProjectRoot() {
    if (process.env.LAMBDA_ROOT) {
        return process.env.LAMBDA_ROOT;
    }
    // Scan up from __dirname looking for lambda/main.cpp as a marker
    let dir = __dirname;
    for (let i = 0; i < 6; i++) {
        const parent = path.dirname(dir);
        if (parent === dir) break; // filesystem root
        dir = parent;
        if (fs.existsSync(path.join(dir, 'lambda', 'main.cpp'))) {
            return dir;
        }
    }
    return path.resolve(__dirname, '..', '..');
}

// ─── Defaults ───────────────────────────────────────────────────────────────

const DEFAULT_VIEWPORT_WIDTH  = 100;
const DEFAULT_VIEWPORT_HEIGHT = 100;
const PIXEL_RATIO     = 1.0;
const THRESHOLD_NO_TEXT = 1.5;               // ≤1.5% for tests without visible text
const THRESHOLD_TEXT    = 5.0;               // ≤5% for tests containing text
const PIXELMATCH_THRESHOLD = 0.1;            // YIQ color distance tolerance

// Detect whether an HTML test file contains visible text content.
// Strips <style>/<script> blocks and HTML tags; if non-whitespace remains
// in the <body>, the test is classified as "text".
function hasVisibleText(htmlPath) {
    const html = fs.readFileSync(htmlPath, 'utf-8');
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (!bodyMatch) return false;
    let body = bodyMatch[1];
    body = body.replace(/<style[\s\S]*?<\/style>/gi, '');
    body = body.replace(/<script[\s\S]*?<\/script>/gi, '');
    body = body.replace(/<[^>]+>/g, '');
    body = body.replace(/&nbsp;/g, '');
    body = body.replace(/\s+/g, '');
    return body.length > 0;
}

// ─── Argument parsing ───────────────────────────────────────────────────────

function parseArgs() {
    const args = process.argv.slice(2);
    const opts = {
        test: null,
        pattern: null,
        threshold: null,               // null = use auto (text/no-text)
        concurrency: Math.max(1, os.cpus().length - 1),
        verbose: false,
        json: false,
        baseline: false,               // only fail on baseline-listed regressions
        exe: LAMBDA_EXE,
        platform: null
    };
    for (let i = 0; i < args.length; i++) {
        switch (args[i]) {
            case '--test': case '-t':
                opts.test = args[++i].replace(/\.html$/, '');
                break;
            case '--pattern': case '-p':
                opts.pattern = args[++i];
                break;
            case '--threshold':
                opts.threshold = parseFloat(args[++i]);
                break;
            case '-j': case '--concurrency':
                opts.concurrency = parseInt(args[++i], 10);
                break;
            case '-v': case '--verbose':
                opts.verbose = true;
                break;
            case '--json':
                opts.json = true;
                break;
            case '--exe':
                opts.exe = args[++i];
                break;
            case '--platform':
                opts.platform = args[++i];
                break;
            case '--baseline':
                opts.baseline = true;
                break;
        }
    }
    return opts;
}

// ─── Render via lambda.exe ──────────────────────────────────────────────────

function renderWithRadiant(exePath, htmlFile, outputPng, viewportWidth, viewportHeight) {
    return new Promise((resolve, reject) => {
        const args = [
            'render', htmlFile,
            '-o', outputPng,
            '-vw', String(viewportWidth || DEFAULT_VIEWPORT_WIDTH),
            '-vh', String(viewportHeight || DEFAULT_VIEWPORT_HEIGHT),
            '--pixel-ratio', String(PIXEL_RATIO)
        ];

        const proc = spawn(exePath, args, {
            cwd: PROJECT_ROOT,
            timeout: 30000
        });

        let stderr = '';
        proc.stderr.on('data', (data) => { stderr += data.toString(); });

        proc.on('close', (code) => {
            if (code === 0) {
                resolve();
            } else {
                reject(new Error(`lambda.exe render failed (exit ${code}): ${stderr.trim()}`));
            }
        });

        proc.on('error', (error) => {
            reject(error);
        });
    });
}

// ─── Batch render via lambda.exe render-batch ───────────────────────────────
//
// Spawns ONE lambda.exe render-batch process for ALL tests.
// Sends render jobs via stdin (tab-separated), reads OK/FAIL results from stdout.
// Saves ~70MB of per-process overhead by sharing UiContext across all renders.

function renderBatchWithRadiant(exePath, jobs) {
    // jobs: [{htmlFile, outputPng, viewportWidth, viewportHeight}]
    return new Promise((resolve, reject) => {
        const proc = spawn(exePath, ['render-batch', '--pixel-ratio', String(PIXEL_RATIO)], {
            cwd: PROJECT_ROOT,
            stdio: ['pipe', 'pipe', 'pipe'],
            timeout: jobs.length * 10000 + 30000  // generous timeout
        });

        let stdout = '';
        let stderr = '';
        proc.stdout.on('data', (data) => { stdout += data.toString(); });
        proc.stderr.on('data', (data) => { stderr += data.toString(); });

        proc.on('close', () => {
            // Parse results: each line is "OK\t<file>" or "FAIL\t<file>\t<reason>"
            const results = new Map();
            for (const line of stdout.split('\n')) {
                const trimmed = line.trim();
                if (!trimmed) continue;
                const parts = trimmed.split('\t');
                if (parts[0] === 'OK' && parts[1]) {
                    results.set(parts[1], { ok: true });
                } else if (parts[0] === 'FAIL' && parts[1]) {
                    results.set(parts[1], { ok: false, reason: parts[2] || 'unknown error' });
                }
            }
            resolve(results);
        });

        proc.on('error', (error) => {
            reject(error);
        });

        // Write all jobs to stdin then close it
        for (const job of jobs) {
            const vw = job.viewportWidth || DEFAULT_VIEWPORT_WIDTH;
            const vh = job.viewportHeight || DEFAULT_VIEWPORT_HEIGHT;
            proc.stdin.write(`${job.htmlFile}\t${job.outputPng}\t${vw}\t${vh}\n`);
        }
        proc.stdin.end();
    });
}

// ─── Image comparison ───────────────────────────────────────────────────────

function compareImages(radiantPath, referencePath, diffPath) {
    const radiantBuf   = fs.readFileSync(radiantPath);
    const referenceBuf = fs.readFileSync(referencePath);

    const radiant   = PNG.sync.read(radiantBuf);
    const reference = PNG.sync.read(referenceBuf);

    // dimension check
    if (radiant.width !== reference.width || radiant.height !== reference.height) {
        return {
            error: `Size mismatch: Radiant ${radiant.width}×${radiant.height} vs Reference ${reference.width}×${reference.height}`,
            mismatchedPixels: -1,
            totalPixels: 0,
            mismatchPercent: 100
        };
    }

    const { width, height } = reference;
    const diff = new PNG({ width, height });

    const mismatchedPixels = pixelmatch(
        reference.data, radiant.data, diff.data,
        width, height,
        { threshold: PIXELMATCH_THRESHOLD, includeAA: false }
    );

    // write diff image if any mismatches
    if (mismatchedPixels > 0) {
        fs.mkdirSync(path.dirname(diffPath), { recursive: true });
        fs.writeFileSync(diffPath, PNG.sync.write(diff));
    }

    const totalPixels = width * height;
    const mismatchPercent = (mismatchedPixels / totalPixels) * 100;
    return { mismatchedPixels, totalPixels, mismatchPercent, error: null };
}

// ─── Per-test config sidecar ────────────────────────────────────────────────

function getTestConfig(testName) {
    const configPath = path.join(PAGE_DIR, `${testName}.config.json`);
    if (fs.existsSync(configPath)) {
        try {
            return JSON.parse(fs.readFileSync(configPath, 'utf-8'));
        } catch (e) {
            // ignore malformed config
        }
    }
    return {};
}

// ─── Single test execution ──────────────────────────────────────────────────

async function runSingleTest(testName, opts) {
    const htmlFile   = path.join(PAGE_DIR, `${testName}.html`);
    const outputPng  = path.join(OUTPUT_DIR, `${testName}.png`);
    const diffPng    = path.join(DIFF_DIR, `${testName}.png`);

    // find reference (platform-specific first, then generic)
    let refPng;
    const platform = opts.platform || process.platform;
    const platformRef = path.join(REF_DIR, `${testName}.${platform}.png`);
    const genericRef  = path.join(REF_DIR, `${testName}.png`);

    if (fs.existsSync(platformRef)) {
        refPng = platformRef;
    } else if (fs.existsSync(genericRef)) {
        refPng = genericRef;
    } else {
        return { testName, status: 'skip', reason: 'no reference image' };
    }

    // per-test viewport size
    const testConfig = getTestConfig(testName);
    const vw = testConfig.viewportWidth  || DEFAULT_VIEWPORT_WIDTH;
    const vh = testConfig.viewportHeight || DEFAULT_VIEWPORT_HEIGHT;

    // render with Radiant
    try {
        await renderWithRadiant(opts.exe, htmlFile, outputPng, vw, vh);
    } catch (err) {
        return { testName, status: 'error', reason: err.message };
    }

    // verify output was created
    if (!fs.existsSync(outputPng)) {
        return { testName, status: 'error', reason: 'Radiant produced no output file' };
    }

    // compare
    const result = compareImages(outputPng, refPng, diffPng);
    if (result.error) {
        return { testName, status: 'fail', reason: result.error, ...result };
    }

    // Determine threshold: CLI override > auto (text/no-text)
    let maxMismatch;
    if (opts.threshold != null) {
        maxMismatch = opts.threshold;                         // CLI --threshold
    } else {
        maxMismatch = hasVisibleText(htmlFile) ? THRESHOLD_TEXT : THRESHOLD_NO_TEXT;
    }

    if (result.mismatchPercent > maxMismatch) {
        return {
            testName,
            status: 'fail',
            reason: `${result.mismatchPercent.toFixed(2)}% > ${maxMismatch}% threshold`,
            ...result,
            diffPath: diffPng
        };
    }

    return { testName, status: 'pass', ...result };
}

// ─── Parallel runner ────────────────────────────────────────────────────────

async function runTestsParallel(testNames, opts) {
    // Phase 1: Batch render all tests in a single lambda.exe process
    const jobs = [];
    const skipResults = [];

    for (const testName of testNames) {
        const htmlFile = path.join(PAGE_DIR, `${testName}.html`);
        const outputPng = path.join(OUTPUT_DIR, `${testName}.png`);

        // check reference exists
        const platform = opts.platform || process.platform;
        const platformRef = path.join(REF_DIR, `${testName}.${platform}.png`);
        const genericRef = path.join(REF_DIR, `${testName}.png`);

        if (!fs.existsSync(platformRef) && !fs.existsSync(genericRef)) {
            skipResults.push({ testName, status: 'skip', reason: 'no reference image' });
            continue;
        }

        const testConfig = getTestConfig(testName);
        const vw = testConfig.viewportWidth || DEFAULT_VIEWPORT_WIDTH;
        const vh = testConfig.viewportHeight || DEFAULT_VIEWPORT_HEIGHT;

        jobs.push({ testName, htmlFile, outputPng, viewportWidth: vw, viewportHeight: vh });
    }

    let batchResults = new Map();
    if (jobs.length > 0) {
        try {
            batchResults = await renderBatchWithRadiant(opts.exe, jobs);
        } catch (err) {
            // batch process failed entirely — mark all as error
            return [
                ...skipResults,
                ...jobs.map(j => ({ testName: j.testName, status: 'error', reason: `batch render failed: ${err.message}` }))
            ];
        }
    }

    // Phase 2: Compare images (parallelized)
    const results = [...skipResults];
    const compareQueue = [...jobs];

    async function compareWorker() {
        while (compareQueue.length > 0) {
            const job = compareQueue.shift();
            if (!job) break;

            const { testName, htmlFile, outputPng } = job;
            const batchResult = batchResults.get(htmlFile);

            if (!batchResult || !batchResult.ok) {
                const reason = batchResult ? batchResult.reason : 'not in batch output';
                results.push({ testName, status: 'error', reason: `render failed: ${reason}` });
                continue;
            }

            if (!fs.existsSync(outputPng)) {
                results.push({ testName, status: 'error', reason: 'Radiant produced no output file' });
                continue;
            }

            // find reference
            const platform = opts.platform || process.platform;
            const platformRef = path.join(REF_DIR, `${testName}.${platform}.png`);
            const genericRef = path.join(REF_DIR, `${testName}.png`);
            const refPng = fs.existsSync(platformRef) ? platformRef : genericRef;

            const diffPng = path.join(DIFF_DIR, `${testName}.png`);
            const result = compareImages(outputPng, refPng, diffPng);

            if (result.error) {
                results.push({ testName, status: 'fail', reason: result.error, ...result });
                continue;
            }

            // Determine threshold
            let maxMismatch;
            if (opts.threshold != null) {
                maxMismatch = opts.threshold;
            } else {
                maxMismatch = hasVisibleText(htmlFile) ? THRESHOLD_TEXT : THRESHOLD_NO_TEXT;
            }

            if (result.mismatchPercent > maxMismatch) {
                results.push({
                    testName,
                    status: 'fail',
                    reason: `${result.mismatchPercent.toFixed(2)}% > ${maxMismatch}% threshold`,
                    ...result,
                    diffPath: diffPng
                });
            } else {
                results.push({ testName, status: 'pass', ...result });
            }
        }
    }

    // Run image comparisons in parallel (CPU-bound, no spawning)
    const workers = [];
    const compareConcurrency = Math.min(opts.concurrency, compareQueue.length);
    for (let i = 0; i < compareConcurrency; i++) {
        workers.push(compareWorker());
    }
    await Promise.all(workers);

    return results;
}
// ─── Baseline support ───────────────────────────────────────────────────

/**
 * Load baseline.txt — returns a Map of test names to their expected mismatch
 * percentage, or null if no baseline file exists.
 *
 * Format: each line starts with a test_name, followed by optional columns
 * separated by whitespace.  Lines starting with '#' are comments.
 * Example: "form_buttons_01  452  2.01%  150x150"
 */
function loadBaseline() {
    const baselinePath = path.join(TEST_DIR, 'baseline.txt');
    if (!fs.existsSync(baselinePath)) return null;

    const content = fs.readFileSync(baselinePath, 'utf-8');
    const entries = new Map();
    for (const rawLine of content.split('\n')) {
        const line = rawLine.trim();
        if (!line || line.startsWith('#')) continue;
        const cols = line.split(/\s+/);
        const name = cols[0];
        // Parse mismatch percent from third column (e.g., "2.01%" or "0.00%")
        let pct = 0;
        if (cols.length >= 3) {
            const pctStr = cols[2].replace('%', '');
            const parsed = parseFloat(pctStr);
            if (!isNaN(parsed)) pct = parsed;
        }
        entries.set(name, pct);
    }
    return entries;
}

/**
 * Check results against the baseline and print a regression report.
 * A baseline regression is when a test's mismatch exceeds its recorded
 * baseline percentage by more than a small tolerance (0.5%).
 * Returns the number of baseline regressions (used as exit code signal).
 */
function checkBaselineRegressions(results, baselineMap, opts) {
    const REGRESSION_TOLERANCE = 0.5;  // allow up to 0.5% above baseline

    const resultMap = new Map(results.map(r => [r.testName, r]));

    const regressions = [];
    for (const [name, baselinePct] of baselineMap) {
        const result = resultMap.get(name);
        if (!result) {
            regressions.push({ name, result: null });
            continue;
        }
        if (result.status === 'error') {
            regressions.push({ name, result });
            continue;
        }
        const actualPct = result.mismatchPercent != null ? result.mismatchPercent : 0;
        if (actualPct > baselinePct + REGRESSION_TOLERANCE) {
            regressions.push({ name, result, baselinePct });
        }
    }

    if (!opts.json) {
        if (regressions.length > 0) {
            console.log(`\n🚨 Baseline Regressions (${regressions.length}):`);
            for (const { name, result, baselinePct } of regressions) {
                if (!result) {
                    console.log(`   ❌ ${name}  (not in test results — missing HTML or reference?)`);
                } else if (result.status === 'error') {
                    console.log(`   ❌ ${name}  (${result.reason || result.status})`);
                } else {
                    const actual = result.mismatchPercent != null ? result.mismatchPercent.toFixed(2) : '?';
                    console.log(`   ❌ ${name}  (${actual}% > baseline ${baselinePct.toFixed(2)}%)`);
                }
            }
            console.log('');
        } else {
            const totalBaseline = baselineMap.size;
            console.log(`\n✅ All ${totalBaseline} baseline tests passed.`);
        }
    }

    return regressions.length;
}
// ─── Main ───────────────────────────────────────────────────────────────────

async function main() {
    const opts = parseArgs();

    // ensure output directories exist
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    fs.mkdirSync(DIFF_DIR, { recursive: true });

    // check binary exists
    if (!fs.existsSync(opts.exe)) {
        console.error(`❌ Lambda executable not found: ${opts.exe}`);
        console.error('   Run "make build" first.');
        process.exit(1);
    }

    // discover test files
    let testNames;
    if (opts.test) {
        const htmlPath = path.join(PAGE_DIR, `${opts.test}.html`);
        if (!fs.existsSync(htmlPath)) {
            console.error(`❌ Test file not found: ${htmlPath}`);
            process.exit(1);
        }
        testNames = [opts.test];
    } else {
        testNames = fs.readdirSync(PAGE_DIR)
            .filter(f => f.endsWith('.html'))
            .map(f => f.replace(/\.html$/, ''))
            .sort();

        if (opts.pattern) {
            const re = new RegExp(opts.pattern, 'i');
            testNames = testNames.filter(n => re.test(n));
        }
    }

    if (testNames.length === 0) {
        console.log('⚠️  No test pages found.');
        return;
    }

    if (!opts.json) {
        console.log('');
        console.log('🎨 Radiant Render Test Suite');
        console.log('==============================');
        const thresholdLabel = opts.threshold != null
            ? `${opts.threshold}%`
            : `auto (no-text: ${THRESHOLD_NO_TEXT}%, text: ${THRESHOLD_TEXT}%)`;
        console.log(`   Tests: ${testNames.length}, Workers: ${opts.concurrency}, Threshold: ${thresholdLabel}`);
        console.log('');
    }

    // run tests
    const results = await runTestsParallel(testNames, opts);

    // sort results by test name for consistent output
    results.sort((a, b) => a.testName.localeCompare(b.testName));

    // output
    if (opts.json) {
        outputJson(results);
    } else {
        outputConsole(results, opts);
    }

    // exit code: in baseline mode, only baseline regressions cause failure
    if (opts.baseline) {
        const baselineMap = loadBaseline();
        if (baselineMap) {
            const baselineRegressions = checkBaselineRegressions(results, baselineMap, opts);
            process.exit(baselineRegressions > 0 ? 1 : 0);
        } else {
            // no baseline file — fall back to reporting all failures
            const failures = results.filter(r => r.status === 'fail' || r.status === 'error');
            process.exit(failures.length > 0 ? 1 : 0);
        }
    } else {
        const failures = results.filter(r => r.status === 'fail' || r.status === 'error');
        process.exit(failures.length > 0 ? 1 : 0);
    }
}

// ─── Output formatters ──────────────────────────────────────────────────────

function outputConsole(results, opts) {
    let passed = 0, failed = 0, skipped = 0, errors = 0;

    for (const r of results) {
        switch (r.status) {
            case 'pass':
                passed++;
                if (r.mismatchedPixels > 0) {
                    console.log(`  ✅ PASS  ${r.testName.padEnd(32)} (${r.mismatchedPixels} diff pixels, ${r.mismatchPercent.toFixed(2)}%)`);
                } else {
                    console.log(`  ✅ PASS  ${r.testName.padEnd(32)} (exact match)`);
                }
                break;
            case 'fail':
                failed++;
                console.log(`  ❌ FAIL  ${r.testName.padEnd(32)} (${r.reason})`);
                if (r.diffPath) {
                    console.log(`           → Diff: ${path.relative(PROJECT_ROOT, r.diffPath)}`);
                }
                break;
            case 'skip':
                skipped++;
                console.log(`  ⚠️  SKIP  ${r.testName.padEnd(32)} (${r.reason})`);
                break;
            case 'error':
                errors++;
                console.log(`  💥 ERROR ${r.testName.padEnd(32)} (${r.reason})`);
                break;
        }
    }

    console.log('');
    console.log(`Results: ${passed}/${results.length} passed` +
        (failed > 0 ? `, ${failed} failed` : '') +
        (skipped > 0 ? `, ${skipped} skipped` : '') +
        (errors > 0 ? `, ${errors} errors` : ''));
    console.log('');
}

function outputJson(results) {
    const summary = {
        total: results.length,
        passed: results.filter(r => r.status === 'pass').length,
        failed: results.filter(r => r.status === 'fail').length,
        skipped: results.filter(r => r.status === 'skip').length,
        errors: results.filter(r => r.status === 'error').length,
        tests: results.map(r => ({
            name: r.testName,
            status: r.status,
            mismatchPercent: r.mismatchPercent ?? null,
            mismatchedPixels: r.mismatchedPixels ?? null,
            reason: r.reason || null
        }))
    };
    console.log(JSON.stringify(summary, null, 2));
}

main().catch(err => {
    console.error('Fatal error:', err);
    process.exit(1);
});
