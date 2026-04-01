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

const VIEWPORT_WIDTH  = 100;
const VIEWPORT_HEIGHT = 100;
const PIXEL_RATIO     = 1.0;
const DEFAULT_MAX_MISMATCH_PERCENT = 0.5;   // ≤0.5% mismatched pixels = pass
const PIXELMATCH_THRESHOLD         = 0.1;   // YIQ color distance tolerance

// ─── Argument parsing ───────────────────────────────────────────────────────

function parseArgs() {
    const args = process.argv.slice(2);
    const opts = {
        test: null,
        pattern: null,
        threshold: DEFAULT_MAX_MISMATCH_PERCENT,
        concurrency: Math.max(1, os.cpus().length - 1),
        verbose: false,
        json: false,
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
        }
    }
    return opts;
}

// ─── Render via lambda.exe ──────────────────────────────────────────────────

function renderWithRadiant(exePath, htmlFile, outputPng) {
    return new Promise((resolve, reject) => {
        const args = [
            'render', htmlFile,
            '-o', outputPng,
            '-vw', String(VIEWPORT_WIDTH),
            '-vh', String(VIEWPORT_HEIGHT),
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

    // render with Radiant
    try {
        await renderWithRadiant(opts.exe, htmlFile, outputPng);
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

    // check threshold (per-test config overrides global)
    const testConfig = getTestConfig(testName);
    const maxMismatch = testConfig.maxMismatchPercent ?? opts.threshold;

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
    const results = [];
    const queue = [...testNames];

    async function worker() {
        while (queue.length > 0) {
            const testName = queue.shift();
            if (!testName) break;
            const result = await runSingleTest(testName, opts);
            results.push(result);
        }
    }

    const workers = [];
    for (let i = 0; i < Math.min(opts.concurrency, testNames.length); i++) {
        workers.push(worker());
    }
    await Promise.all(workers);

    return results;
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
        console.log(`   Tests: ${testNames.length}, Workers: ${opts.concurrency}, Threshold: ${opts.threshold}%`);
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

    // exit code
    const failures = results.filter(r => r.status === 'fail' || r.status === 'error');
    process.exit(failures.length > 0 ? 1 : 0);
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
