#!/usr/bin/env node

/**
 * Save a layout test suite's results as a JSON snapshot for regression detection.
 *
 * Usage (reads test runner JSON from stdin):
 *   node test_radiant_layout.js --json -c page -j 5 | node save_suite_snapshot.js --save page
 *   node test_radiant_layout.js --json -c page -j 5 | node save_suite_snapshot.js --check page
 *   node test_radiant_layout.js --json -c page -j 5 | node save_suite_snapshot.js --diff page
 *
 * Commands:
 *   --save <suite>    Save current results as the reference snapshot
 *   --check <suite>   Check current results against saved snapshot (exit 1 on regression)
 *   --diff <suite>    Show per-file differences against saved snapshot
 *
 * Output is saved to: test/layout/snapshot/<suite>.json
 *
 * Snapshot JSON format:
 * {
 *   "suite": "page",
 *   "timestamp": "2026-03-26T...",
 *   "summary": { "totalTests": 10, "averageElements": 74.5, "averageText": 65.2 },
 *   "tests": {
 *     "documentation": { "elements": 74.7, "text": 65.1 },
 *     ...
 *   }
 * }
 */

const fs = require('fs');
const path = require('path');

const SNAPSHOT_DIR = path.join(__dirname, 'snapshot');
const PROJECT_ROOT = path.resolve(__dirname, '..', '..');

function usage() {
    console.error(`Usage: <test_runner --json> | node ${path.basename(process.argv[1])} --save|--check|--diff <suite>`);
    console.error('');
    console.error('  --save <suite>    Save stdin results as reference snapshot');
    console.error('  --check <suite>   Compare stdin results against saved snapshot (exit 1 on avg regression)');
    console.error('  --diff <suite>    Show per-file differences against saved snapshot');
    process.exit(1);
}

function readStdin() {
    return new Promise((resolve, reject) => {
        let data = '';
        process.stdin.setEncoding('utf8');
        process.stdin.on('data', chunk => { data += chunk; });
        process.stdin.on('end', () => resolve(data));
        process.stdin.on('error', reject);
    });
}

function parseJsonOutput(raw) {
    // The JSON may be preceded by non-JSON lines; search backwards for the object start
    const lines = raw.split('\n');
    for (let i = lines.length - 1; i >= 0; i--) {
        const trimmed = lines[i].trim();
        if (trimmed.startsWith('{')) {
            try {
                return JSON.parse(lines.slice(i).join('\n'));
            } catch (e) { /* keep searching */ }
        }
    }
    return JSON.parse(raw);
}

function buildSnapshot(suite, rawResults) {
    const tests = {};
    let elemSum = 0;
    let textSum = 0;
    let count = 0;

    for (const r of (rawResults.results || [])) {
        const name = r.name;
        const elem = r.elementPassRate != null ? r.elementPassRate : 0;
        const text = r.textPassRate != null ? r.textPassRate : 100;

        tests[name] = {
            elements: Math.round(elem * 10) / 10,
            text: Math.round(text * 10) / 10
        };

        elemSum += elem;
        textSum += text;
        count++;
    }

    return {
        suite,
        timestamp: new Date().toISOString(),
        summary: {
            totalTests: count,
            averageElements: count > 0 ? Math.round((elemSum / count) * 10) / 10 : 0,
            averageText: count > 0 ? Math.round((textSum / count) * 10) / 10 : 0
        },
        tests
    };
}

function saveSnapshot(suite, snapshot) {
    if (!fs.existsSync(SNAPSHOT_DIR)) {
        fs.mkdirSync(SNAPSHOT_DIR, { recursive: true });
    }
    const filePath = path.join(SNAPSHOT_DIR, `${suite}.json`);
    fs.writeFileSync(filePath, JSON.stringify(snapshot, null, 2) + '\n');
    console.log(`Snapshot saved: ${path.relative(PROJECT_ROOT, filePath)}`);
    console.log(`  Tests: ${snapshot.summary.totalTests}`);
    console.log(`  Avg Elements: ${snapshot.summary.averageElements}%`);
    console.log(`  Avg Text: ${snapshot.summary.averageText}%`);
}

function loadSnapshot(suite) {
    const filePath = path.join(SNAPSHOT_DIR, `${suite}.json`);
    if (!fs.existsSync(filePath)) {
        console.error(`No saved snapshot found: ${path.relative(PROJECT_ROOT, filePath)}`);
        console.error(`Run without --check/--diff first to create one.`);
        process.exit(1);
    }
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function compareSnapshots(saved, current, showDiff) {
    const regressions = [];
    const improvements = [];

    // Compare each test present in the saved snapshot
    for (const [name, savedScores] of Object.entries(saved.tests)) {
        const curScores = current.tests[name];
        if (!curScores) {
            regressions.push({ name, reason: 'test missing from current run' });
            continue;
        }

        const elemDelta = curScores.elements - savedScores.elements;
        const textDelta = curScores.text - savedScores.text;

        if (elemDelta < -0.1 || textDelta < -0.1) {
            regressions.push({
                name,
                reason: [
                    elemDelta < -0.1 ? `elements ${savedScores.elements}% → ${curScores.elements}% (${elemDelta > 0 ? '+' : ''}${elemDelta.toFixed(1)}%)` : null,
                    textDelta < -0.1 ? `text ${savedScores.text}% → ${curScores.text}% (${textDelta > 0 ? '+' : ''}${textDelta.toFixed(1)}%)` : null
                ].filter(Boolean).join(', ')
            });
        } else if (elemDelta > 0.1 || textDelta > 0.1) {
            improvements.push({
                name,
                detail: [
                    elemDelta > 0.1 ? `elements ${savedScores.elements}% → ${curScores.elements}% (+${elemDelta.toFixed(1)}%)` : null,
                    textDelta > 0.1 ? `text ${savedScores.text}% → ${curScores.text}% (+${textDelta.toFixed(1)}%)` : null
                ].filter(Boolean).join(', ')
            });
        }
    }

    // Check for new tests not in saved snapshot
    const newTests = Object.keys(current.tests).filter(n => !(n in saved.tests));

    // Summary averages
    const savedAvgElem = saved.summary.averageElements;
    const savedAvgText = saved.summary.averageText;
    const curAvgElem = current.summary.averageElements;
    const curAvgText = current.summary.averageText;
    const avgElemDelta = curAvgElem - savedAvgElem;
    const avgTextDelta = curAvgText - savedAvgText;

    console.log(`\nSuite: ${current.suite}`);
    console.log(`Saved:   ${saved.summary.totalTests} tests, avg elements ${savedAvgElem}%, avg text ${savedAvgText}% (${saved.timestamp})`);
    console.log(`Current: ${current.summary.totalTests} tests, avg elements ${curAvgElem}%, avg text ${curAvgText}%`);

    if (showDiff) {
        // Show all per-file scores sorted by element delta
        const allNames = new Set([...Object.keys(saved.tests), ...Object.keys(current.tests)]);
        const rows = [];
        for (const name of allNames) {
            const s = saved.tests[name] || { elements: '-', text: '-' };
            const c = current.tests[name] || { elements: '-', text: '-' };
            const eDelta = (typeof s.elements === 'number' && typeof c.elements === 'number')
                ? c.elements - s.elements : null;
            const tDelta = (typeof s.text === 'number' && typeof c.text === 'number')
                ? c.text - s.text : null;
            rows.push({ name, s, c, eDelta, tDelta });
        }
        rows.sort((a, b) => (a.eDelta || 0) - (b.eDelta || 0));

        console.log(`\n${'Test'.padEnd(45)} ${'Elem(saved)'.padStart(12)} ${'Elem(now)'.padStart(10)} ${'Δ'.padStart(8)} ${'Text(saved)'.padStart(12)} ${'Text(now)'.padStart(10)} ${'Δ'.padStart(8)}`);
        console.log('-'.repeat(107));
        for (const r of rows) {
            const es = typeof r.s.elements === 'number' ? `${r.s.elements}%` : r.s.elements;
            const ec = typeof r.c.elements === 'number' ? `${r.c.elements}%` : r.c.elements;
            const ed = r.eDelta != null ? `${r.eDelta > 0 ? '+' : ''}${r.eDelta.toFixed(1)}%` : '';
            const ts = typeof r.s.text === 'number' ? `${r.s.text}%` : r.s.text;
            const tc = typeof r.c.text === 'number' ? `${r.c.text}%` : r.c.text;
            const td = r.tDelta != null ? `${r.tDelta > 0 ? '+' : ''}${r.tDelta.toFixed(1)}%` : '';
            const marker = (r.eDelta != null && r.eDelta < -0.1) || (r.tDelta != null && r.tDelta < -0.1) ? '❌' :
                           (r.eDelta != null && r.eDelta > 0.1) || (r.tDelta != null && r.tDelta > 0.1) ? '✅' : '  ';
            console.log(`${marker} ${r.name.padEnd(43)} ${es.padStart(12)} ${ec.padStart(10)} ${ed.padStart(8)} ${ts.padStart(12)} ${tc.padStart(10)} ${td.padStart(8)}`);
        }
    }

    if (improvements.length > 0) {
        console.log(`\n✅ Improvements (${improvements.length}):`);
        for (const imp of improvements) {
            console.log(`   ${imp.name}: ${imp.detail}`);
        }
    }
    if (newTests.length > 0) {
        console.log(`\n🆕 New tests (${newTests.length}): ${newTests.join(', ')}`);
    }

    // Check for regression in TOTAL AVERAGES (not per-file)
    const hasAvgRegression = avgElemDelta < -0.1 || avgTextDelta < -0.1;
    if (hasAvgRegression) {
        console.log(`\n❌ Average regression detected:`);
        if (avgElemDelta < -0.1)
            console.log(`   Avg elements: ${savedAvgElem}% → ${curAvgElem}% (${avgElemDelta.toFixed(1)}%)`);
        if (avgTextDelta < -0.1)
            console.log(`   Avg text: ${savedAvgText}% → ${curAvgText}% (${avgTextDelta.toFixed(1)}%)`);
        return false;
    }

    if (regressions.length > 0) {
        console.log(`\n⚠️  Per-file regressions (${regressions.length}) but averages held:`);
        for (const reg of regressions) {
            console.log(`   ${reg.name}: ${reg.reason}`);
        }
    }

    console.log(`\n✅ No average regression. Avg elements: ${savedAvgElem}% → ${curAvgElem}% (${avgElemDelta >= 0 ? '+' : ''}${avgElemDelta.toFixed(1)}%), avg text: ${savedAvgText}% → ${curAvgText}% (${avgTextDelta >= 0 ? '+' : ''}${avgTextDelta.toFixed(1)}%)`);
    return true;
}

// --- Main ---
async function main() {
    const args = process.argv.slice(2);
    const saveMode = args.includes('--save');
    const checkMode = args.includes('--check');
    const diffMode = args.includes('--diff');

    // Suite name follows the flag
    let suite = null;
    for (const flag of ['--save', '--check', '--diff']) {
        const idx = args.indexOf(flag);
        if (idx >= 0 && idx + 1 < args.length) {
            suite = args[idx + 1];
            break;
        }
    }

    if (!suite || (!saveMode && !checkMode && !diffMode)) usage();

    // Read JSON from stdin
    const raw = await readStdin();
    const rawResults = parseJsonOutput(raw);
    const current = buildSnapshot(suite, rawResults);

    if (checkMode || diffMode) {
        const saved = loadSnapshot(suite);
        const ok = compareSnapshots(saved, current, diffMode);
        if (!ok) process.exit(1);
    } else {
        saveSnapshot(suite, current);
    }
}

main().catch(err => {
    console.error('Error:', err.message);
    process.exit(1);
});
