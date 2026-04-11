#!/usr/bin/env node

/**
 * Pretext Corpus Test Generator
 *
 * Generates HTML test files for text line-breaking accuracy testing.
 * Each corpus text is rendered at widths 300–900px (step 10) using a
 * bundled font (Liberation Sans 16px, line-height 1.5).
 *
 * Usage:
 *   node generate_corpus_tests.js                    # generate Phase 1 (en-gatsby + mixed-app)
 *   node generate_corpus_tests.js --phase 2          # generate Phase 2 (Thai)
 *   node generate_corpus_tests.js --phase 3          # generate Phase 3 (Hindi, Myanmar)
 *   node generate_corpus_tests.js --corpus en-gatsby-opening  # single corpus
 *   node generate_corpus_tests.js --clean            # remove generated .html files
 */

const fs = require('fs');
const path = require('path');

// ─── Configuration ──────────────────────────────────────────────────────────

// Find project root by looking for Makefile (handles symlinked test/layout)
function findProjectRoot(startDir) {
    let dir = path.resolve(startDir);
    for (let i = 0; i < 10; i++) {
        if (fs.existsSync(path.join(dir, 'Makefile')) && fs.existsSync(path.join(dir, 'ref'))) {
            return dir;
        }
        const parent = path.dirname(dir);
        if (parent === dir) break;
        dir = parent;
    }
    // Fallback: assume cwd is project root
    return process.cwd();
}

const PROJECT_ROOT = findProjectRoot(__dirname);
const CORPORA_DIR = path.join(PROJECT_ROOT, 'ref', 'pretext', 'corpora');
const OUTPUT_DIR = __dirname;  // test/layout/data/pretext/

const WIDTH_MIN = 300;
const WIDTH_MAX = 900;
const WIDTH_STEP = 10;

const PHASE_CORPORA = {
    1: ['en-gatsby-opening', 'mixed-app-text'],
    2: ['th-nithan-vetal-story-1', 'th-nithan-vetal-story-7'],
    3: ['hi-eidgah', 'my-cunning-heron-teacher', 'my-bad-deeds-return-to-you-teacher'],
};

// Short IDs for filenames (avoid very long names)
const CORPUS_SHORT_ID = {
    'en-gatsby-opening': 'en_gatsby',
    'mixed-app-text': 'mixed_app',
    'th-nithan-vetal-story-1': 'th_vetal1',
    'th-nithan-vetal-story-7': 'th_vetal7',
    'hi-eidgah': 'hi_eidgah',
    'my-cunning-heron-teacher': 'my_heron',
    'my-bad-deeds-return-to-you-teacher': 'my_deeds',
};

// ─── HTML Template ──────────────────────────────────────────────────────────

function generateHTML(corpusText, width) {
    // Split into paragraphs (one or more blank lines)
    const paragraphs = corpusText
        .split(/\n{2,}/)
        .map(p => p.trim())
        .filter(p => p.length > 0);

    // Escape HTML entities and wrap each paragraph in <p>
    const body = paragraphs.map(p => {
        const escaped = p
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/\n/g, ' ');  // collapse single newlines within paragraphs
        return `<p>${escaped}</p>`;
    }).join('\n');

    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Pretext corpus: width ${width}px</title>
<style>
@font-face {
    font-family: 'Liberation Sans';
    src: url('../font/LiberationSans-Regular.ttf') format('truetype');
}
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Liberation Sans', sans-serif; font-size: 16px; line-height: 1.5; }
</style>
</head>
<body>
<div style="width: ${width}px;">
${body}
</div>
</body>
</html>
`;
}

// ─── Main ───────────────────────────────────────────────────────────────────

function main() {
    const args = process.argv.slice(2);
    let phase = null;
    let singleCorpus = null;
    let clean = false;

    for (let i = 0; i < args.length; i++) {
        if (args[i] === '--phase' && i + 1 < args.length) {
            phase = parseInt(args[i + 1], 10);
            i++;
        } else if (args[i] === '--corpus' && i + 1 < args.length) {
            singleCorpus = args[i + 1];
            i++;
        } else if (args[i] === '--clean') {
            clean = true;
        }
    }

    if (clean) {
        const files = fs.readdirSync(OUTPUT_DIR).filter(f => f.startsWith('pretext_') && f.endsWith('.html'));
        files.forEach(f => fs.unlinkSync(path.join(OUTPUT_DIR, f)));
        console.log(`Removed ${files.length} generated HTML files`);
        return;
    }

    // Determine which corpora to generate
    let corpora;
    if (singleCorpus) {
        corpora = [singleCorpus];
    } else if (phase) {
        corpora = PHASE_CORPORA[phase];
        if (!corpora) {
            console.error(`Unknown phase: ${phase}. Valid: 1, 2, 3`);
            process.exit(1);
        }
    } else {
        // Default: Phase 1
        corpora = PHASE_CORPORA[1];
    }

    let totalFiles = 0;

    for (const corpusName of corpora) {
        const shortId = CORPUS_SHORT_ID[corpusName] || corpusName.replace(/-/g, '_');
        const corpusFile = path.join(CORPORA_DIR, `${corpusName}.txt`);

        if (!fs.existsSync(corpusFile)) {
            console.error(`Corpus not found: ${corpusFile}`);
            continue;
        }

        const corpusText = fs.readFileSync(corpusFile, 'utf8').trim();
        console.log(`Generating: ${corpusName} (${corpusText.length} chars)`);

        for (let w = WIDTH_MIN; w <= WIDTH_MAX; w += WIDTH_STEP) {
            const filename = `pretext_${shortId}_w${w}.html`;
            const html = generateHTML(corpusText, w);
            fs.writeFileSync(path.join(OUTPUT_DIR, filename), html);
            totalFiles++;
        }
    }

    console.log(`Generated ${totalFiles} HTML test files in ${OUTPUT_DIR}`);
}

main();
