#!/usr/bin/env node
'use strict';

/**
 * move_passed_tests.js
 *
 * Moves passed layout tests from a source suite to the baseline suite.
 * Only moves HTML files that have NO external dependencies (CSS files, JS files,
 * external images, external fonts). Self-contained tests with inline styles and
 * data: URIs are considered dependency-free.
 *
 * Usage (from project root):
 *   node ./test/layout/move_passed_tests.js box              # Move passed tests from 'box' to 'baseline'
 *   node ./test/layout/move_passed_tests.js basic            # Move passed tests from 'basic' to 'baseline'
 *   node ./test/layout/move_passed_tests.js wpt-css-lists    # Move passed WPT tests to 'baseline/wpt'
 *
 * External dependency detection:
 *   - <link rel="stylesheet" href="...">  → external CSS file
 *   - <script src="...">                  → external JS file
 *   - <img src="...">                     → external image
 *   - url(...) in CSS                     → external resource (image, font, etc.)
 *   - @import "..." in CSS                → external CSS
 *   All of the above are skipped if they are data: URIs or fragment (#...) references.
 */

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

// ANSI colors
const GREEN  = '\x1b[0;32m';
const YELLOW = '\x1b[1;33m';
const RED    = '\x1b[0;31m';
const BLUE   = '\x1b[0;34m';
const NC     = '\x1b[0m';

function log(color, msg) {
    process.stdout.write(color + msg + NC + '\n');
}

/**
 * Returns true if a URL is "inline" (not an external file dependency):
 *  - data: URIs  (e.g. data:image/png;base64,...)
 *  - fragment-only references  (e.g. #svgElement)
 *  - empty string
 */
function isInlineOrFragment(url) {
    const trimmed = url.trim();
    return !trimmed || trimmed.startsWith('data:') || trimmed.startsWith('#');
}

/**
 * Parse an HTML file and return a list of external dependency descriptions.
 * Returns an empty array if the file is fully self-contained.
 */
function findExternalDeps(htmlPath) {
    let content;
    try {
        content = fs.readFileSync(htmlPath, 'utf8');
    } catch (err) {
        return [`(unreadable: ${err.message})`];
    }

    const deps = [];

    // --- <link> elements ---
    // Matches the whole opening tag so we can inspect all attributes regardless of order.
    // Only flag <link rel="stylesheet">, <link rel="preload">, <link rel="font">.
    const LINK_TAG_RE = /<link\b([^>]*)>/gi;
    let m;
    while ((m = LINK_TAG_RE.exec(content)) !== null) {
        const attrs = m[1];
        const relMatch = /\brel\s*=\s*["']([^"']+)["']/i.exec(attrs);
        if (!relMatch) continue;
        const rel = relMatch[1].toLowerCase().trim();
        if (rel !== 'stylesheet' && rel !== 'preload' && rel !== 'font') continue;
        const hrefMatch = /\bhref\s*=\s*["']([^"']+)["']/i.exec(attrs);
        if (hrefMatch && !isInlineOrFragment(hrefMatch[1])) {
            deps.push(`CSS/Resource: ${hrefMatch[1]}`);
        }
    }

    // --- <script src="..."> elements ---
    const SCRIPT_TAG_RE = /<script\b([^>]*)>/gi;
    while ((m = SCRIPT_TAG_RE.exec(content)) !== null) {
        const attrs = m[1];
        const srcMatch = /\bsrc\s*=\s*["']([^"']+)["']/i.exec(attrs);
        if (srcMatch && !isInlineOrFragment(srcMatch[1])) {
            deps.push(`JS: ${srcMatch[1]}`);
        }
    }

    // --- <img src="..."> elements ---
    const IMG_TAG_RE = /<img\b([^>]*)>/gi;
    while ((m = IMG_TAG_RE.exec(content)) !== null) {
        const attrs = m[1];
        const srcMatch = /\bsrc\s*=\s*["']([^"']+)["']/i.exec(attrs);
        if (srcMatch && !isInlineOrFragment(srcMatch[1])) {
            deps.push(`Image: ${srcMatch[1]}`);
        }
    }

    // --- CSS url(...) references ---
    // Covers: background-image, border-image, list-style-image, @font-face src, etc.
    // Handles: url("..."), url('...'), url(...)
    const CSS_URL_RE = /url\s*\(\s*(?:"([^"]*)"|'([^']*)'|([^)'"]\S*?))\s*\)/gi;
    const seenUrls = new Set();
    while ((m = CSS_URL_RE.exec(content)) !== null) {
        const url = (m[1] ?? m[2] ?? m[3] ?? '').trim();
        if (url && !isInlineOrFragment(url) && !seenUrls.has(url)) {
            seenUrls.add(url);
            deps.push(`Resource: ${url}`);
        }
    }

    // --- @import "..." (string form, url() form is already caught above) ---
    const IMPORT_RE = /@import\s+["']([^"']+)["']/gi;
    while ((m = IMPORT_RE.exec(content)) !== null) {
        const url = m[1].trim();
        if (url && !isInlineOrFragment(url)) {
            deps.push(`@import: ${url}`);
        }
    }

    return deps;
}

/**
 * Run `make layout suite=<suite>` streaming output to stdout, and return the
 * full collected stdout string.
 */
function runMakeLayout(suite) {
    return new Promise((resolve, reject) => {
        const child = spawn('make', ['layout', `suite=${suite}`], {
            stdio: ['inherit', 'pipe', 'inherit'],
        });

        let output = '';
        child.stdout.on('data', (chunk) => {
            process.stdout.write(chunk);
            output += chunk.toString();
        });

        child.on('close', () => resolve(output));
        child.on('error', reject);
    });
}

/**
 * Parse the make output and return test names that passed (100%).
 * Looks for the pattern:
 *   📊 Test Case: <name>
 *   ...
 *   ✅ PASS Overall: ...
 */
function parsePassedTests(output) {
    const passed = [];
    let currentTest = null;

    for (const line of output.split('\n')) {
        // Match "📊 Test Case: <name>"
        const caseMatch = line.match(/📊\s+Test\s+Case:\s+(.+)/);
        if (caseMatch) {
            currentTest = caseMatch[1].trim();
            continue;
        }
        if (/✅\s+PASS\s+Overall/.test(line)) {
            if (currentTest) {
                passed.push(currentTest);
                currentTest = null;
            }
        } else if (/❌\s+FAIL\s+Overall/.test(line)) {
            currentTest = null;
        }
    }
    return passed;
}

/**
 * Find the HTML file for a test name (tries .htm and .html, recursively).
 */
function findHtmlFile(searchDir, testName) {
    const exts = ['.html', '.htm'];
    for (const ext of exts) {
        const found = findRecursive(searchDir, testName + ext);
        if (found) return found;
    }
    return null;
}

function findRecursive(dir, filename) {
    let entries;
    try {
        entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch {
        return null;
    }
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            const result = findRecursive(fullPath, filename);
            if (result) return result;
        } else if (entry.name === filename) {
            return fullPath;
        }
    }
    return null;
}

function prompt(question) {
    return new Promise((resolve) => {
        const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
        rl.question(question, (answer) => { rl.close(); resolve(answer); });
    });
}

async function main() {
    const sourceSuite = process.argv[2];
    if (!sourceSuite) {
        log(RED, 'Error: No suite specified');
        console.log('Usage: node ./test/layout/move_passed_tests.js <suite_name>');
        console.log('Example: node ./test/layout/move_passed_tests.js box');
        process.exit(1);
    }

    const TARGET_SUITE = 'baseline';
    const dataSourceDir = path.join('test', 'layout', 'data', sourceSuite);

    // WPT suites (wpt-*) go into baseline/wpt/ subdirectory
    const dataTargetDir = sourceSuite.startsWith('wpt-')
        ? path.join('test', 'layout', 'data', TARGET_SUITE, 'wpt')
        : path.join('test', 'layout', 'data', TARGET_SUITE);

    if (!fs.existsSync(dataSourceDir)) {
        log(RED, `Error: Source data directory not found: ${dataSourceDir}`);
        process.exit(1);
    }

    fs.mkdirSync(dataTargetDir, { recursive: true });

    console.log('');
    log(BLUE, '═══════════════════════════════════════════════════════════');
    log(BLUE, `  Moving Passed Tests: ${sourceSuite} → ${TARGET_SUITE}`);
    log(BLUE, '═══════════════════════════════════════════════════════════');
    console.log('');

    log(YELLOW, `Running layout tests for suite: ${sourceSuite}`);
    console.log('');

    const makeOutput = await runMakeLayout(sourceSuite);

    console.log('');
    log(YELLOW, 'Analyzing test results...');
    console.log('');

    const passedTests = parsePassedTests(makeOutput);
    log(GREEN, `Found ${passedTests.length} passed tests`);
    console.log('');

    if (passedTests.length === 0) {
        log(YELLOW, 'No passed tests to move. Exiting.');
        return;
    }

    // Check each passed test for external dependencies
    const movable   = [];  // { testName, htmlPath, htmlFile }
    const skippable = [];  // { testName, htmlPath, reason: string[] }
    const missing   = [];  // testName (HTML file not found)

    for (const testName of passedTests) {
        const htmlPath = findHtmlFile(dataSourceDir, testName);
        if (!htmlPath) {
            missing.push(testName);
            continue;
        }
        const deps = findExternalDeps(htmlPath);
        if (deps.length > 0) {
            skippable.push({ testName, htmlPath, deps });
        } else {
            movable.push({ testName, htmlPath, htmlFile: path.basename(htmlPath) });
        }
    }

    // Report self-contained tests to be moved
    if (movable.length > 0) {
        log(BLUE, `Self-contained tests to move (${movable.length}):`);
        for (const { testName } of movable) {
            console.log(`  • ${testName}`);
        }
        console.log('');
    }

    // Report tests skipped due to external dependencies
    if (skippable.length > 0) {
        log(YELLOW, `Tests skipped due to external dependencies (${skippable.length}):`);
        for (const { testName, deps } of skippable) {
            console.log(`  ⊘ ${testName}`);
            for (const dep of deps) {
                console.log(`      └─ ${dep}`);
            }
        }
        console.log('');
    }

    // Report tests with missing HTML files
    if (missing.length > 0) {
        log(RED, `Tests with missing HTML files (${missing.length}):`);
        for (const testName of missing) {
            console.log(`  ⚠  ${testName}`);
        }
        console.log('');
    }

    if (movable.length === 0) {
        log(YELLOW, 'No self-contained tests to move. Exiting.');
        return;
    }

    // Confirm before moving
    const answer = await prompt(
        YELLOW + `Move ${movable.length} self-contained test(s) from '${sourceSuite}' to '${TARGET_SUITE}'? [y/N] ` + NC
    );

    if (!/^[Yy]$/.test(answer.trim())) {
        log(RED, 'Aborted.');
        return;
    }

    console.log('');
    log(YELLOW, 'Moving files...');
    console.log('');

    let movedCount   = 0;
    let failedCount  = 0;

    for (const { htmlPath, htmlFile } of movable) {
        const targetPath = path.join(dataTargetDir, htmlFile);
        try {
            fs.renameSync(htmlPath, targetPath);
            log(GREEN, `  ✓ Moved: ${htmlFile}`);
            movedCount++;
        } catch (err) {
            log(RED, `  ✗ Failed to move ${htmlFile}: ${err.message}`);
            failedCount++;
        }
    }

    // Remove moved tests from source baseline.txt if it exists
    const sourceBaselinePath = path.join(dataSourceDir, 'baseline.txt');
    let baselineRemoved = 0;
    if (fs.existsSync(sourceBaselinePath)) {
        const movedNames = new Set(movable.filter((_, i) => i < movedCount).map(m => m.testName));
        // Re-check: use the actual moved set (all movable entries up to movedCount were moved in order)
        const movedSet = new Set();
        for (let i = 0, moved = 0; i < movable.length && moved < movedCount; i++) {
            const targetPath = path.join(dataTargetDir, movable[i].htmlFile);
            if (fs.existsSync(targetPath)) {
                movedSet.add(movable[i].testName);
                moved++;
            }
        }

        const lines = fs.readFileSync(sourceBaselinePath, 'utf8').split('\n');
        const filtered = [];
        for (const line of lines) {
            const name = line.trim();
            if (name && movedSet.has(name)) {
                baselineRemoved++;
            } else {
                filtered.push(line);
            }
        }
        if (baselineRemoved > 0) {
            // Remove trailing empty lines, keep single trailing newline
            while (filtered.length > 0 && filtered[filtered.length - 1].trim() === '') {
                filtered.pop();
            }
            fs.writeFileSync(sourceBaselinePath, filtered.join('\n') + '\n');
            log(GREEN, `  ✓ Removed ${baselineRemoved} entry(s) from ${sourceBaselinePath}`);
        }
    }

    console.log('');
    log(BLUE, '═══════════════════════════════════════════════════════════');
    log(GREEN, `✓ Successfully moved ${movedCount} test(s)`);
    if (baselineRemoved > 0) {
        log(GREEN, `✓ Removed ${baselineRemoved} entry(s) from source baseline.txt`);
    }
    if (skippable.length > 0) {
        log(YELLOW, `⊘ Skipped ${skippable.length} test(s) with external dependencies`);
    }
    if (missing.length > 0) {
        log(YELLOW, `⚠ ${missing.length} test(s) had no HTML file found`);
    }
    if (failedCount > 0) {
        log(RED, `✗ Failed to move ${failedCount} test(s)`);
    }
    log(BLUE, '═══════════════════════════════════════════════════════════');
    console.log('');

    log(YELLOW, `Tip: Run 'make layout suite=baseline' to verify moved tests still pass`);
    console.log('');
}

main().catch((err) => {
    console.error(RED + 'Fatal error: ' + NC, err);
    process.exit(1);
});
