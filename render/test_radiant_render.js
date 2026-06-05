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
 *   node test_radiant_render.js --update-baseline        # Update baseline.txt from current results
 *   node test_radiant_render.js --suite puppertino       # Run tests from one suite subdirectory
 *   node test_radiant_render.js --suite page,puppertino   # Run tests from multiple suites (default)
 *   node test_radiant_render.js --replay-parity --test clip_path_with_effects_01
 *   node test_radiant_render.js --strip-parity                 # normal PNG vs strip tiled-PNG export
 *   node test_radiant_render.js --strip-parity --strip-height 96  # force more strips per page
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
const ARTIFACT_DIR = process.env.RADIANT_RENDER_ARTIFACT_DIR ||
    path.join(PROJECT_ROOT, 'temp', 'render');
// Default suites: include both 'page' (general regression) and 'puppertino' (component library).
const DEFAULT_SUITES = ['page', 'puppertino'];
// Active suite directories (populated in main()). Each entry is an absolute path.
let   PAGE_DIRS   = [path.join(TEST_DIR, 'page')];
// Map from test name to its source suite directory (populated during discovery).
const TEST_DIR_MAP = new Map();
const REF_DIR     = path.join(TEST_DIR, 'reference');
const OUTPUT_DIR  = process.env.RADIANT_RENDER_OUTPUT_DIR ||
    path.join(ARTIFACT_DIR, 'output');
const DIFF_DIR    = process.env.RADIANT_RENDER_DIFF_DIR ||
    path.join(ARTIFACT_DIR, 'diff');

// Resolve the source suite directory for a given test name.
function suiteDirFor(testName) {
    return TEST_DIR_MAP.get(testName) || PAGE_DIRS[0];
}

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
        updateBaseline: false,
        replayParity: false,
        stripParity: false,            // normal PNG vs strip-based tiled PNG export
        stripHeight: 256,              // physical px per strip for strip-parity mode
        exe: LAMBDA_EXE,
        platform: null,
        suite: null
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
            case '--update-baseline':
                opts.updateBaseline = true;
                break;
            case '--replay-parity':
                opts.replayParity = true;
                break;
            case '--strip-parity':
                opts.stripParity = true;
                break;
            case '--strip-height':
                opts.stripHeight = parseInt(args[++i], 10);
                break;
            case '--suite': case '-s':
                opts.suite = args[++i];
                break;
        }
    }
    return opts;
}

// ─── Render via lambda.exe ──────────────────────────────────────────────────

function renderWithRadiant(exePath, htmlFile, outputPng, viewportWidth, viewportHeight, pixelRatio) {
    return renderWithRadiantEnv(exePath, htmlFile, outputPng, viewportWidth, viewportHeight, pixelRatio, null);
}

function renderWithRadiantEnv(exePath, htmlFile, outputPng, viewportWidth, viewportHeight, pixelRatio, envOverrides) {
    return new Promise((resolve, reject) => {
        const args = [
            'render', htmlFile,
            '-o', outputPng,
            '-vw', String(viewportWidth || DEFAULT_VIEWPORT_WIDTH),
            '-vh', String(viewportHeight || DEFAULT_VIEWPORT_HEIGHT),
            '--pixel-ratio', String(pixelRatio || PIXEL_RATIO)
        ];

        const proc = spawn(exePath, args, {
            cwd: PROJECT_ROOT,
            env: envOverrides ? { ...process.env, ...envOverrides } : process.env,
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

// Render auto-sized (no -vw/-vh) so content bounds drive output dimensions.
// Used by strip-parity mode, where the large-page tiled export path only
// triggers on auto-sizing.
function renderAutoSizeWithEnv(exePath, htmlFile, outputPng, pixelRatio, envOverrides) {
    return new Promise((resolve, reject) => {
        const args = ['render', htmlFile, '-o', outputPng, '--pixel-ratio', String(pixelRatio || PIXEL_RATIO)];
        const proc = spawn(exePath, args, {
            cwd: PROJECT_ROOT,
            env: envOverrides ? { ...process.env, ...envOverrides } : process.env,
            timeout: 30000
        });
        let stderr = '';
        proc.stderr.on('data', (data) => { stderr += data.toString(); });
        proc.on('close', (code) => {
            if (code === 0) resolve();
            else reject(new Error(`lambda.exe render failed (exit ${code}): ${stderr.trim()}`));
        });
        proc.on('error', (error) => reject(error));
    });
}

// ─── Batch render via lambda.exe render-batch ───────────────────────────────
//
// Spawns ONE lambda.exe render-batch process for ALL tests.
// Sends render jobs via stdin (tab-separated), reads OK/FAIL results from stdout.
// Saves ~70MB of per-process overhead by sharing UiContext across all renders.

function renderBatchWithRadiant(exePath, jobs, pixelRatio) {
    // jobs: [{htmlFile, outputPng, viewportWidth, viewportHeight}]
    return new Promise((resolve, reject) => {
        const proc = spawn(exePath, ['render-batch', '--pixel-ratio', String(pixelRatio || PIXEL_RATIO)], {
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
    return { mismatchedPixels, totalPixels, mismatchPercent, width, height, error: null };
}

// ─── Per-test config sidecar ────────────────────────────────────────────────

function getTestConfig(testName) {
    const configPath = path.join(suiteDirFor(testName), `${testName}.config.json`);
    if (fs.existsSync(configPath)) {
        try {
            return JSON.parse(fs.readFileSync(configPath, 'utf-8'));
        } catch (e) {
            // ignore malformed config
        }
    }
    return {};
}

function applyExpectedFailure(testConfig, result) {
    if (!testConfig || testConfig.expectedFail !== true) {
        return result;
    }

    const expectedReason = testConfig.expectedFailReason || 'expected failure';
    if (result.status === 'fail' || result.status === 'error') {
        return { ...result, status: 'xfail', reason: expectedReason };
    }
    if (result.status === 'pass') {
        return {
            ...result,
            status: 'xpass',
            reason: expectedReason
        };
    }
    return result;
}

// ─── Single test execution ──────────────────────────────────────────────────

async function runSingleTest(testName, opts) {
    const htmlFile   = path.join(suiteDirFor(testName), `${testName}.html`);
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
    const finalize = (result) => applyExpectedFailure(testConfig, result);
    const vw = testConfig.viewportWidth  || DEFAULT_VIEWPORT_WIDTH;
    const vh = testConfig.viewportHeight || DEFAULT_VIEWPORT_HEIGHT;
    const pixelRatio = testConfig.pixelRatio || PIXEL_RATIO;

    // render with Radiant
    try {
        await renderWithRadiant(opts.exe, htmlFile, outputPng, vw, vh, pixelRatio);
    } catch (err) {
        return finalize({ testName, status: 'error', reason: err.message });
    }

    // verify output was created
    if (!fs.existsSync(outputPng)) {
        return finalize({ testName, status: 'error', reason: 'Radiant produced no output file' });
    }

    // compare
    const result = compareImages(outputPng, refPng, diffPng);
    if (result.error) {
        return finalize({ testName, status: 'fail', reason: result.error, ...result });
    }

    // Determine threshold: CLI override > auto (text/no-text)
    let maxMismatch;
    if (opts.threshold != null) {
        maxMismatch = opts.threshold;                         // CLI --threshold
    } else if (testConfig.threshold != null) {
        maxMismatch = testConfig.threshold;
    } else {
        maxMismatch = hasVisibleText(htmlFile) ? THRESHOLD_TEXT : THRESHOLD_NO_TEXT;
    }

    if (result.mismatchPercent > maxMismatch) {
        return finalize({
            testName,
            status: 'fail',
            reason: `${result.mismatchPercent.toFixed(2)}% > ${maxMismatch}% threshold`,
            ...result,
            diffPath: diffPng
        });
    }

    return finalize({ testName, status: 'pass', ...result });
}

// ─── Replay parity runner ──────────────────────────────────────────────────

async function runReplayParityTest(testName, opts) {
    const htmlFile = path.join(suiteDirFor(testName), `${testName}.html`);
    const singlePng = path.join(OUTPUT_DIR, `${testName}.single.png`);
    const tiledPng = path.join(OUTPUT_DIR, `${testName}.tiled.png`);
    const diffPng = path.join(DIFF_DIR, `${testName}.replay_parity.png`);
    const testConfig = getTestConfig(testName);
    const vw = testConfig.viewportWidth || DEFAULT_VIEWPORT_WIDTH;
    const vh = testConfig.viewportHeight || DEFAULT_VIEWPORT_HEIGHT;
    const pixelRatio = testConfig.pixelRatio || PIXEL_RATIO;

    try {
        await renderWithRadiantEnv(opts.exe, htmlFile, singlePng, vw, vh, pixelRatio,
                                   { RADIANT_RENDER_THREADS: '1' });
        await renderWithRadiantEnv(opts.exe, htmlFile, tiledPng, vw, vh, pixelRatio,
                                   { RADIANT_RENDER_THREADS: '2' });
    } catch (err) {
        return { testName, status: 'error', reason: err.message };
    }

    if (!fs.existsSync(singlePng) || !fs.existsSync(tiledPng)) {
        return { testName, status: 'error', reason: 'Radiant produced no parity output file' };
    }

    const result = compareImages(tiledPng, singlePng, diffPng);
    if (result.error) {
        return { testName, status: 'fail', reason: result.error, ...result };
    }

    const maxMismatch = opts.threshold != null ? opts.threshold : 0.0;
    if (result.mismatchPercent > maxMismatch) {
        return {
            testName,
            status: 'fail',
            reason: `${result.mismatchPercent.toFixed(2)}% > ${maxMismatch}% replay parity threshold`,
            ...result,
            diffPath: diffPng
        };
    }

    return { testName, status: 'pass', ...result };
}

async function runReplayParityTests(testNames, opts) {
    const queue = [...testNames];
    const results = [];

    async function worker() {
        while (queue.length > 0) {
            const testName = queue.shift();
            if (!testName) break;
            results.push(await runReplayParityTest(testName, opts));
        }
    }

    const workers = [];
    const count = Math.min(opts.concurrency, queue.length);
    for (let i = 0; i < count; i++) {
        workers.push(worker());
    }
    await Promise.all(workers);
    return results;
}

// ─── Strip-parity runner ────────────────────────────────────────────────────
//
// Validates that the large-page tiled PNG export (record display list once,
// replay horizontal strips via dl_replay_tile) matches normal full-surface
// rendering. The strip export path only triggers on auto-sizing and when the
// output exceeds the tile threshold, so both knobs are forced via env:
//   RADIANT_TILE_THRESHOLD=1   → always take the tiled export path
//   RADIANT_TILE_STRIP_H=<n>   → strip height in physical px (forces >1 strip)
// The normal render is forced single-surface (RADIANT_RENDER_THREADS=1) for a
// stable reference. Both are auto-sized so dimensions match.

async function runStripParityTest(testName, opts) {
    const htmlFile = path.join(suiteDirFor(testName), `${testName}.html`);
    const normalPng = path.join(OUTPUT_DIR, `${testName}.normal.png`);
    const stripPng = path.join(OUTPUT_DIR, `${testName}.strip.png`);
    const diffPng = path.join(DIFF_DIR, `${testName}.strip_parity.png`);

    try {
        await renderAutoSizeWithEnv(opts.exe, htmlFile, normalPng, PIXEL_RATIO,
            { RADIANT_RENDER_THREADS: '1' });
        await renderAutoSizeWithEnv(opts.exe, htmlFile, stripPng, PIXEL_RATIO,
            { RADIANT_TILE_THRESHOLD: '1', RADIANT_TILE_STRIP_H: String(opts.stripHeight) });
    } catch (err) {
        return { testName, status: 'error', reason: err.message };
    }

    if (!fs.existsSync(normalPng) || !fs.existsSync(stripPng)) {
        return { testName, status: 'error', reason: 'Radiant produced no strip-parity output file' };
    }

    const result = compareImages(stripPng, normalPng, diffPng);
    if (result.error) {
        return { testName, status: 'fail', reason: result.error, ...result };
    }

    // Use the suite's auto thresholds: glyph anti-aliasing differs slightly
    // between single-surface and tiled glyph rasterisers (a known single-vs-
    // tiled divergence), so text pages are allowed the text threshold.
    const isText = hasVisibleText(htmlFile);
    const maxMismatch = opts.threshold != null
        ? opts.threshold
        : (isText ? THRESHOLD_TEXT : THRESHOLD_NO_TEXT);
    if (result.mismatchPercent > maxMismatch) {
        return {
            testName,
            status: 'fail',
            reason: `${result.mismatchPercent.toFixed(2)}% > ${maxMismatch}% strip parity threshold`,
            ...result,
            diffPath: diffPng
        };
    }

    return { testName, status: 'pass', ...result };
}

async function runStripParityTests(testNames, opts) {
    const queue = [...testNames];
    const results = [];

    async function worker() {
        while (queue.length > 0) {
            const testName = queue.shift();
            if (!testName) break;
            results.push(await runStripParityTest(testName, opts));
        }
    }

    const workers = [];
    const count = Math.min(opts.concurrency, queue.length);
    for (let i = 0; i < count; i++) {
        workers.push(worker());
    }
    await Promise.all(workers);
    return results;
}

// ─── Parallel runner ────────────────────────────────────────────────────────

async function runTestsParallel(testNames, opts) {
    // Phase 1: Batch render all tests in a single lambda.exe process
    const jobs = [];
    const skipResults = [];

    for (const testName of testNames) {
        const htmlFile = path.join(suiteDirFor(testName), `${testName}.html`);
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

        const pixelRatio = testConfig.pixelRatio || PIXEL_RATIO;
        jobs.push({ testName, htmlFile, outputPng, viewportWidth: vw, viewportHeight: vh, pixelRatio });
    }

    let batchResults = new Map();
    if (jobs.length > 0) {
        try {
            const jobsByPixelRatio = new Map();
            for (const job of jobs) {
                const key = String(job.pixelRatio || PIXEL_RATIO);
                if (!jobsByPixelRatio.has(key)) jobsByPixelRatio.set(key, []);
                jobsByPixelRatio.get(key).push(job);
            }
            for (const [pixelRatio, group] of jobsByPixelRatio) {
                const groupResults = await renderBatchWithRadiant(opts.exe, group, Number(pixelRatio));
                for (const [htmlFile, result] of groupResults) {
                    batchResults.set(htmlFile, result);
                }
            }
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
            const testConfig = getTestConfig(testName);
            const finalize = (result) => applyExpectedFailure(testConfig, result);

            if (!batchResult || !batchResult.ok) {
                const reason = batchResult ? batchResult.reason : 'not in batch output';
                results.push(finalize({ testName, status: 'error', reason: `render failed: ${reason}` }));
                continue;
            }

            if (!fs.existsSync(outputPng)) {
                results.push(finalize({ testName, status: 'error', reason: 'Radiant produced no output file' }));
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
                results.push(finalize({ testName, status: 'fail', reason: result.error, ...result }));
                continue;
            }

            // Determine threshold
            let maxMismatch;
            if (opts.threshold != null) {
                maxMismatch = opts.threshold;
            } else if (testConfig.threshold != null) {
                maxMismatch = testConfig.threshold;
            } else {
                maxMismatch = hasVisibleText(htmlFile) ? THRESHOLD_TEXT : THRESHOLD_NO_TEXT;
            }

            if (result.mismatchPercent > maxMismatch) {
                results.push(finalize({
                    testName,
                    status: 'fail',
                    reason: `${result.mismatchPercent.toFixed(2)}% > ${maxMismatch}% threshold`,
                    ...result,
                    diffPath: diffPng
                }));
            } else {
                results.push(finalize({ testName, status: 'pass', ...result }));
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

function isBaselineUpdatableResult(result) {
    return result &&
        (result.status === 'pass' || result.status === 'xpass' || result.status === 'xfail') &&
        result.mismatchPercent != null &&
        result.mismatchedPixels != null &&
        result.width > 0 &&
        result.height > 0;
}

function formatBaselineLine(name, result) {
    const diffPixels = result.mismatchedPixels === 0
        ? 'exact'
        : String(result.mismatchedPixels);
    const percent = `${result.mismatchPercent.toFixed(2)}%`;
    const viewport = `${result.width}x${result.height}`;
    return `${name.padEnd(42)} ${diffPixels.padStart(5)}  ${percent.padStart(6)}  ${viewport}`;
}

function parseBaselineMetric(rawLine) {
    const cols = rawLine.trim().split(/\s+/);
    if (cols.length < 3) {
        return { name: cols[0] || '', pixels: null, percent: null };
    }

    const pixels = cols[1] === 'exact' ? 0 : parseInt(cols[1], 10);
    const percent = parseFloat(cols[2].replace('%', ''));
    return {
        name: cols[0],
        pixels: Number.isFinite(pixels) ? pixels : null,
        percent: Number.isFinite(percent) ? percent : null
    };
}

function isBaselineImprovement(rawLine, result) {
    const current = parseBaselineMetric(rawLine);
    if (current.percent == null) {
        return true;
    }
    if (result.mismatchPercent < current.percent) {
        return true;
    }
    if (result.mismatchPercent > current.percent) {
        return false;
    }
    return current.pixels == null || result.mismatchedPixels < current.pixels;
}

function promoteExpectedFailurePasses(results, opts) {
    let promoted = 0;
    for (const result of results) {
        if (!result || result.status !== 'xpass') continue;

        const configPath = path.join(suiteDirFor(result.testName), `${result.testName}.config.json`);
        if (!fs.existsSync(configPath)) continue;

        let config;
        try {
            config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
        } catch (err) {
            if (!opts.json) {
                console.log(`   ⚠️  Could not promote ${result.testName}: malformed config (${err.message})`);
            }
            continue;
        }
        if (config.expectedFail !== true) continue;

        delete config.expectedFail;
        delete config.expectedFailReason;
        fs.writeFileSync(configPath, `${JSON.stringify(config, null, 2)}\n`);
        promoted++;
    }
    return promoted;
}

function updateBaselineFile(results, opts) {
    const baselinePath = path.join(TEST_DIR, 'baseline.txt');
    const updatable = new Map();
    let skipped = 0;
    let notImproved = 0;

    for (const result of results) {
        if (isBaselineUpdatableResult(result)) {
            updatable.set(result.testName, result);
        } else if (result.status !== 'skip') {
            skipped++;
        }
    }

    if (updatable.size === 0) {
        if (!opts.json) {
            console.log('\n⚠️  Baseline update skipped: no completed render results to write.');
        }
        return { updated: 0, added: 0, skipped };
    }

    let lines;
    if (fs.existsSync(baselinePath)) {
        lines = fs.readFileSync(baselinePath, 'utf-8').split('\n');
    } else {
        const today = new Date().toISOString().slice(0, 10);
        lines = [
            '# Radiant Render Test Baseline',
            `# Generated: ${today}`,
            '#',
            '# Format: test_name | diff_pixels | diff_percent | viewport',
            '#',
            ''
        ];
    }

    let updated = 0;
    const seen = new Set();
    const nextLines = [];

    for (const rawLine of lines) {
        const line = rawLine.trim();
        if (!line || line.startsWith('#')) {
            nextLines.push(rawLine);
            continue;
        }

        const name = line.split(/\s+/)[0];
        const result = updatable.get(name);
        if (!result) {
            nextLines.push(rawLine);
            continue;
        }

        const replacement = formatBaselineLine(name, result);
        if (!isBaselineImprovement(rawLine, result)) {
            nextLines.push(rawLine);
            seen.add(name);
            notImproved++;
            continue;
        }
        if (rawLine !== replacement) {
            updated++;
        }
        nextLines.push(replacement);
        seen.add(name);
    }

    const missing = [];
    for (const [name, result] of updatable) {
        if (!seen.has(name)) {
            missing.push([name, result]);
        }
    }
    missing.sort((a, b) => a[0].localeCompare(b[0]));
    if (missing.length > 0) {
        if (nextLines.length > 0 && nextLines[nextLines.length - 1].trim() !== '') {
            nextLines.push('');
        }
        nextLines.push('# -- Added by render baseline update -----------------------------');
        for (const [name, result] of missing) {
            nextLines.push(formatBaselineLine(name, result));
        }
    }

    fs.writeFileSync(baselinePath, nextLines.join('\n').replace(/\n*$/, '\n'));
    const promoted = promoteExpectedFailurePasses(results, opts);

    if (!opts.json) {
        console.log(`\n📝 Updated render baseline: ${updated} improved, ${missing.length} added, ${notImproved} unchanged/not improved, ${promoted} promoted, ${skipped} skipped.`);
        console.log(`   ${path.relative(PROJECT_ROOT, baselinePath)}`);
    }
    return { updated, added: missing.length, notImproved, promoted, skipped };
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
        if (result.status === 'xfail' || result.status === 'xpass') {
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

    // resolve active suites — comma-separated list, or default to DEFAULT_SUITES
    const suiteNames = opts.suite
        ? opts.suite.split(',').map(s => s.trim()).filter(Boolean)
        : DEFAULT_SUITES.slice();
    PAGE_DIRS = [];
    for (const suite of suiteNames) {
        const dir = path.join(TEST_DIR, suite);
        if (!fs.existsSync(dir)) {
            // skip missing default suites silently; error on explicit missing suite
            if (opts.suite) {
                console.error(`❌ Suite directory not found: ${dir}`);
                process.exit(1);
            }
            continue;
        }
        PAGE_DIRS.push(dir);
    }
    if (PAGE_DIRS.length === 0) {
        console.error(`❌ No suite directories available under ${TEST_DIR}`);
        process.exit(1);
    }

    // check binary exists
    if (!fs.existsSync(opts.exe)) {
        console.error(`❌ Lambda executable not found: ${opts.exe}`);
        console.error('   Run "make build" first.');
        process.exit(1);
    }

    // discover test files across all active suites
    let testNames;
    if (opts.test) {
        let foundDir = null;
        for (const dir of PAGE_DIRS) {
            const htmlPath = path.join(dir, `${opts.test}.html`);
            if (fs.existsSync(htmlPath)) { foundDir = dir; break; }
        }
        if (!foundDir) {
            console.error(`❌ Test file not found in any suite: ${opts.test}.html`);
            process.exit(1);
        }
        TEST_DIR_MAP.set(opts.test, foundDir);
        testNames = [opts.test];
    } else {
        const collected = [];
        for (const dir of PAGE_DIRS) {
            for (const f of fs.readdirSync(dir)) {
                if (!f.endsWith('.html')) continue;
                const name = f.replace(/\.html$/, '');
                if (TEST_DIR_MAP.has(name)) {
                    console.error(`⚠️  Duplicate test name across suites: ${name} (using first occurrence)`);
                    continue;
                }
                TEST_DIR_MAP.set(name, dir);
                collected.push(name);
            }
        }
        testNames = collected.sort();

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
        const suiteLabel = ` [${suiteNames.join(', ')}]`;
        console.log(`🎨 Radiant Render Test Suite${suiteLabel}`);
        console.log('==============================');
        const thresholdLabel = opts.threshold != null
            ? `${opts.threshold}%`
            : (opts.replayParity ? 'replay parity exact' :
               `auto (no-text: ${THRESHOLD_NO_TEXT}%, text: ${THRESHOLD_TEXT}%)`);
        console.log(`   Tests: ${testNames.length}, Workers: ${opts.concurrency}, Threshold: ${thresholdLabel}`);
        if (opts.replayParity) {
            console.log('   Mode: single-thread replay vs tiled replay');
        }
        if (opts.stripParity) {
            console.log(`   Mode: normal PNG vs strip tiled-PNG export (strip height ${opts.stripHeight}px)`);
        }
        console.log('');
    }

    // run tests
    const results = opts.replayParity
        ? await runReplayParityTests(testNames, opts)
        : opts.stripParity
        ? await runStripParityTests(testNames, opts)
        : await runTestsParallel(testNames, opts);

    // sort results by test name for consistent output
    results.sort((a, b) => a.testName.localeCompare(b.testName));

    // output
    if (opts.json) {
        outputJson(results);
    } else {
        outputConsole(results, opts);
    }

    if (opts.updateBaseline) {
        updateBaselineFile(results, opts);
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
    let passed = 0, failed = 0, skipped = 0, errors = 0, xfailed = 0, xpassed = 0;
    const unexpectedFailures = [];
    const unexpectedPasses = [];

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
                unexpectedFailures.push(r);
                console.log(`  ❌ FAIL  ${r.testName.padEnd(32)} (${r.reason})`);
                if (r.diffPath) {
                    console.log(`           → Diff: ${path.relative(PROJECT_ROOT, r.diffPath)}`);
                }
                break;
            case 'skip':
                skipped++;
                console.log(`  ⚠️  SKIP  ${r.testName.padEnd(32)} (${r.reason})`);
                break;
            case 'xfail':
                xfailed++;
                console.log(`  🟨 XFAIL ${r.testName.padEnd(32)} (${r.reason})`);
                if (r.diffPath) {
                    console.log(`           → Diff: ${path.relative(PROJECT_ROOT, r.diffPath)}`);
                }
                break;
            case 'xpass':
                xpassed++;
                unexpectedPasses.push(r);
                if (r.mismatchedPixels > 0) {
                    console.log(`  🟩 XPASS ${r.testName.padEnd(32)} (${r.mismatchedPixels} diff pixels, ${r.mismatchPercent.toFixed(2)}%; was expected failure: ${r.reason})`);
                } else {
                    console.log(`  🟩 XPASS ${r.testName.padEnd(32)} (exact match; was expected failure: ${r.reason})`);
                }
                break;
            case 'error':
                errors++;
                unexpectedFailures.push(r);
                console.log(`  💥 ERROR ${r.testName.padEnd(32)} (${r.reason})`);
                break;
        }
    }

    console.log('');
    const effectivePassed = passed + xpassed;
    console.log(`Results: ${effectivePassed}/${results.length} passed` +
        (failed > 0 ? `, ${failed} failed` : '') +
        (xpassed > 0 ? `, ${xpassed} new passes` : '') +
        (xfailed > 0 ? `, ${xfailed} expected failures` : '') +
        (skipped > 0 ? `, ${skipped} skipped` : '') +
        (errors > 0 ? `, ${errors} errors` : ''));

    if (unexpectedPasses.length > 0) {
        console.log('');
        console.log(`✨ New Passing Expected Failures (${unexpectedPasses.length}):`);
        for (const r of unexpectedPasses) {
            const pct = r.mismatchPercent != null ? `${r.mismatchPercent.toFixed(2)}%` : '?';
            const pixels = r.mismatchedPixels != null && r.mismatchedPixels >= 0
                ? `${r.mismatchedPixels} pixels`
                : '? pixels';
            console.log(`   - ${r.testName}  (${pct}, ${pixels}; was: ${r.reason})`);
        }
    }

    if (unexpectedFailures.length > 0) {
        console.log('');
        console.log(`🚨 Unexpected Failures (${unexpectedFailures.length}):`);
        for (const r of unexpectedFailures) {
            const label = r.status === 'error' ? 'ERROR' : 'FAIL';
            const reason = r.reason || r.status;
            const pct = r.mismatchPercent != null ? `, ${r.mismatchPercent.toFixed(2)}%` : '';
            const pixels = r.mismatchedPixels != null && r.mismatchedPixels >= 0
                ? `, ${r.mismatchedPixels} pixels`
                : '';
            console.log(`   - ${r.testName} [${label}] ${reason}${pct}${pixels}`);
            if (r.diffPath) {
                console.log(`     diff: ${path.relative(PROJECT_ROOT, r.diffPath)}`);
            }
        }
    }
    console.log('');
}

function outputJson(results) {
    const summary = {
        total: results.length,
        passed: results.filter(r => r.status === 'pass' || r.status === 'xpass').length,
        failed: results.filter(r => r.status === 'fail').length,
        xpassed: results.filter(r => r.status === 'xpass').length,
        xfailed: results.filter(r => r.status === 'xfail').length,
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
