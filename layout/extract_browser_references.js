#!/usr/bin/env node

/**
 * Simple Browser Layout Extractor
 * Extracts layout data from a single HTML file using Puppeteer
 */

const puppeteer = require('puppeteer');
const fs = require('fs').promises;
const fsSync = require('fs');
const os = require('os');
const path = require('path');
const { referenceNameForPath } = require('./reference_paths');

const LAMBDA_ROOT = process.env.LAMBDA_ROOT || path.resolve(__dirname, '..', '..');

function localTempDir(name) {
    const tempRoot = path.join(LAMBDA_ROOT, 'temp');
    fsSync.mkdirSync(tempRoot, { recursive: true });
    const dir = path.join(tempRoot, `${name}-${process.pid}`);
    fsSync.mkdirSync(dir, { recursive: true });
    return dir;
}

function findChromeHeadlessShell() {
    const explicitPath = process.env.CHROME_HEADLESS_SHELL || process.env.PUPPETEER_EXECUTABLE_PATH;
    if (explicitPath && fsSync.existsSync(explicitPath)) {
        return explicitPath;
    }

    if (os.platform() !== 'darwin') {
        return null;
    }

    const cacheRoot = path.join(os.homedir(), '.cache', 'puppeteer', 'chrome-headless-shell');
    const archDir = os.arch() === 'arm64'
        ? 'chrome-headless-shell-mac-arm64'
        : 'chrome-headless-shell-mac-x64';

    try {
        const versions = fsSync.readdirSync(cacheRoot).sort().reverse();
        for (const version of versions) {
            const candidate = path.join(cacheRoot, version, archDir, 'chrome-headless-shell');
            if (fsSync.existsSync(candidate)) {
                return candidate;
            }
        }
    } catch (e) {
        // fall through to Puppeteer's default executable.
    }
    return null;
}

function contentTypeForPath(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    if (ext === '.png') return 'image/png';
    if (ext === '.jpg' || ext === '.jpeg') return 'image/jpeg';
    if (ext === '.gif') return 'image/gif';
    if (ext === '.svg') return 'image/svg+xml';
    if (ext === '.css') return 'text/css';
    if (ext === '.ttf') return 'font/ttf';
    if (ext === '.woff') return 'font/woff';
    if (ext === '.woff2') return 'font/woff2';
    return 'application/octet-stream';
}

async function resolveWptAbsoluteResource(requestUrl, htmlFilePath, category) {
    let parsed;
    try {
        parsed = new URL(requestUrl);
    } catch {
        return null;
    }

    if (parsed.protocol !== 'file:') {
        return null;
    }

    const categoryDir = category ? path.join(__dirname, 'data', category) : path.dirname(htmlFilePath);
    const requestPath = decodeURIComponent(parsed.pathname);
    const candidates = [];

    if (requestPath.startsWith('/css/') || requestPath.startsWith('/fonts/') ||
        requestPath.startsWith('/images/')) {
        const afterCssRoot = requestPath.startsWith('/css/')
            ? requestPath.substring('/css/'.length)
            : requestPath.substring(1);
        if (category && category.startsWith('wpt-css-')) {
            const cssSuiteName = category.substring('wpt-'.length);
            if (afterCssRoot.startsWith(`${cssSuiteName}/`)) {
                candidates.push(path.join(categoryDir, afterCssRoot.substring(cssSuiteName.length + 1)));
            }
        }
        candidates.push(path.join(categoryDir, afterCssRoot));
        candidates.push(path.join(__dirname, 'data', afterCssRoot));
        // WPT's shared /fonts root is stored in the local support tree; missing this
        // mapping silently makes browser references use fallback font metrics.
        if (afterCssRoot.startsWith('fonts/')) {
            candidates.push(path.join(__dirname, 'data', 'support', afterCssRoot));
        }
        candidates.push(path.join(LAMBDA_ROOT, 'ref', 'wpt', afterCssRoot));
    } else if (category && category.startsWith('wpt-css-')) {
        // mirrored WPT fixtures may omit support files that remain in ref/wpt;
        // map a missing file-relative request through the category mirror.
        const cssSuiteName = category.substring('wpt-'.length);
        const relativePath = path.relative(categoryDir, requestPath);
        if (relativePath && !relativePath.startsWith('..') && !path.isAbsolute(relativePath)) {
            candidates.push(path.join(LAMBDA_ROOT, 'ref', 'wpt', 'css', cssSuiteName, relativePath));
        }
    }

    for (const candidate of candidates) {
        try {
            await fs.access(candidate);
            return candidate;
        } catch {}
    }
    return null;
}

async function extractLayoutFromFile(htmlFilePath, forceRegenerate = false, platform = null, category = null) {
    console.log(`🔍 Checking layout extraction for: ${htmlFilePath}`);

    // Determine output file path first
    // Handle both .html and .htm extensions
    let baseName = referenceNameForPath(htmlFilePath, category);
    // WPT categories store references under reference/wpt/ to avoid name collisions
    // Also detect wpt context from file path (e.g., baseline/wpt/test.html)
    const isWpt = (category && category.startsWith('wpt-')) ||
                  (htmlFilePath && htmlFilePath.includes('/wpt/'));
    // web-tmpl templates: each is a subdirectory with index.html; use dir name as test name
    const isWebTmpl = category === 'web-tmpl' ||
                      (htmlFilePath && htmlFilePath.includes('/web-tmpl/'));
    if (isWebTmpl && baseName === 'index') {
        baseName = path.basename(path.dirname(htmlFilePath));
    }
    if (isWpt && category) {
        const categoryDir = path.join(__dirname, 'data', category);
        const relativePath = path.relative(categoryDir, htmlFilePath);
        if (relativePath && !relativePath.startsWith('..') && !path.isAbsolute(relativePath) &&
            relativePath.includes(path.sep)) {
            // preserve nested WPT identities; basename-only references collide across suites.
            baseName = relativePath.slice(0, -ext.length).split(path.sep).join('__');
        }
    }
    const outputDir = isWpt
        ? path.join(__dirname, 'reference', 'wpt')
        : isWebTmpl
            ? path.join(__dirname, 'reference', 'web-tmpl')
            : path.join(__dirname, 'reference');
    // If platform is specified, add platform suffix to filename (e.g., test_name.linux.json)
    const outputFile = platform
        ? path.join(outputDir, `${baseName}.${platform}.json`)
        : path.join(outputDir, `${baseName}.json`);

    // Check if output file already exists (unless force regeneration is requested)
    if (!forceRegenerate) {
        try {
            await fs.access(outputFile);
            console.log(`⏭️  Reference file already exists, skipping: ${outputFile}`);
            console.log(`   Use --force flag to regenerate existing files`);

            // Read existing file to return consistent data structure
            const existingContent = await fs.readFile(outputFile, 'utf8');
            const existingData = JSON.parse(existingContent);
            existingData._wasSkipped = true; // Flag to indicate this was skipped
            return existingData;
        } catch (error) {
            // File doesn't exist, proceed with generation
            console.log(`📝 Generating new reference file: ${outputFile}`);
        }
    } else {
        console.log(`🔄 Force regenerating reference file: ${outputFile}`);
    }

    console.log(`🔍 Extracting layout from: ${htmlFilePath}`);

    let browser = null;
    try {
        // Launch browser - use system Chromium on ARM Linux if available
        console.log('🚀 Launching browser...');
        const launchOptions = {
            headless: 'new',
            args: [
                '--no-sandbox',
                '--disable-web-security',
                '--font-render-hinting=none',
                '--disable-dev-shm-usage',
                '--disable-gpu',
                '--disable-features=VizDisplayCompositor',
                '--enable-blink-features=CSSTextBoxTrim',
                '--disable-extensions',
                '--no-first-run',
                '--disable-default-apps'
            ],
            userDataDir: localTempDir('puppeteer-layout-profile'),
            timeout: 30000
        };

        // On ARM Linux, use system Chromium instead of Puppeteer's bundled Chrome
        const { execSync } = require('child_process');
        if (os.arch() === 'arm64' && os.platform() === 'linux') {
            try {
                const chromiumPath = execSync('which chromium-browser || which chromium', { encoding: 'utf8' }).trim();
                if (chromiumPath) {
                    console.log(`📦 Using system Chromium: ${chromiumPath}`);
                    launchOptions.executablePath = chromiumPath;
                }
            } catch (e) {
                // Fall back to bundled Chrome
            }
        }

        // On macOS, prefer chrome-headless-shell. Regular .app Chrome can abort
        // during application registration in non-GUI automation contexts.
        if (os.platform() === 'darwin' && !launchOptions.executablePath) {
            const headlessShell = findChromeHeadlessShell();
            if (headlessShell) {
                console.log(`📦 Using Chrome headless shell: ${headlessShell}`);
                launchOptions.executablePath = headlessShell;
            }
        }

        // Fall back to system Chrome if a dedicated headless shell is unavailable.
        if (os.platform() === 'darwin' && !launchOptions.executablePath) {
            const systemChrome = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
            try {
                if (fsSync.existsSync(systemChrome)) {
                    console.log(`📦 Using system Chrome fallback: ${systemChrome}`);
                    launchOptions.executablePath = systemChrome;
                }
            } catch (e) {
                // Fall back to bundled Chrome
            }
        }

        browser = await puppeteer.launch(launchOptions);

        const page = await browser.newPage();

        // Set consistent viewport and disable animations (from extract_layout.js)
        await page.setViewport({ width: 1200, height: 800, deviceScaleFactor: 1 });
        const freezeReferenceAnimations = !/animation|interpolation/i.test(htmlFilePath);
        await page.evaluateOnNewDocument((freezeAnimations) => {
            // The standalone extractor intentionally does not load the full WPT
            // harness: its cleanup would remove the DOM that Radiant compares.
            // Supply only the callbacks needed by layout setup scripts.
            window.test = window.test || ((callback) => {
                if (typeof callback === 'function') callback();
            });
            window.async_test = window.async_test || (() => ({done() {}}));
            window.promise_test = window.promise_test || (() => {});
            window.assert_true = window.assert_true || (() => {});
            window.assert_false = window.assert_false || (() => {});
            window.assert_equals = window.assert_equals || (() => {});

            // Freeze timer-driven layout changes during reference capture. Some
            // CSS2.1 tests run a synchronous setup step, then schedule repeated
            // toggles with setTimeout(); keep the setup result and avoid racing
            // the later event-loop ticks.
            const nativeSetTimeout = window.setTimeout.bind(window);
            window.setTimeout = (handler, delay = 0, ...args) => {
                if (Number(delay) <= 0) {
                    if (typeof handler === 'function') {
                        handler(...args);
                    } else if (typeof handler === 'string') {
                        window.eval(handler);
                    }
                }
                return 0;
            };
            window.clearTimeout = () => {};

            if (!freezeAnimations) return;

            // Disable animations for consistent layout. The document head does
            // not exist yet when evaluateOnNewDocument runs.
            nativeSetTimeout(() => {
                const style = document.createElement('style');
                style.textContent = `
                    *, *::before, *::after {
                        animation-duration: 0s !important;
                        animation-delay: 0s !important;
                        transition-duration: 0s !important;
                        transition-delay: 0s !important;
                    }
                `;
                const parent = document.head || document.documentElement;
                if (parent) {
                    parent.appendChild(style);
                } else {
                    document.addEventListener('DOMContentLoaded', () => {
                        (document.head || document.documentElement)?.appendChild(style);
                    }, { once: true });
                }
            }, 0);
        }, freezeReferenceAnimations);
        console.log('✅ Browser ready');

        // WPT CSS tests use server-root URLs; file:// extraction has
        // no web root, so map those requests back to the local category resources.
        await page.setRequestInterception(true);
        page.on('request', async (request) => {
            try {
                // let the file navigation proceed without an async resolver;
                // delaying the document request makes Chromium report ERR_ABORTED.
                if (request.resourceType() === 'document') {
                    const documentSource = await fs.readFile(htmlFilePath, 'utf8');
                    let normalizedSource = documentSource.replace(
                        /(text-box-trim\s*:\s*)(both|start|end)(\s*[;}]?)/gi,
                        (_, prefix, value, suffix) => `${prefix}trim-${value.toLowerCase()}${suffix}`
                    );
                    if (category === 'wpt-css-sizing') {
                        // The bundled headless shell has no width:fit-content()
                        // implementation; capture its spec-equivalent clamp so
                        // the reference remains comparable to Radiant’s CSS
                        // Sizing implementation instead of an invalid-declaration
                        // fallback to auto.
                        normalizedSource = normalizedSource.replace(
                            /(\bwidth\s*:\s*)fit-content\(\s*([^()]+?)\s*\)/gi,
                            (_, prefix, limit) =>
                                `${prefix}max-content; min-width: min-content; max-width: ${limit}`
                        );
                    }
                    if (normalizedSource !== documentSource) {
                        await request.respond({
                            status: 200,
                            contentType: 'text/html',
                            body: Buffer.from(normalizedSource)
                        });
                    } else {
                        await request.continue();
                    }
                    return;
                }
                const resourcePath = await resolveWptAbsoluteResource(request.url(), htmlFilePath, category);
                if (resourcePath) {
                    let body = await fs.readFile(resourcePath);
                    if (path.basename(resourcePath) === 'interpolation-testcommon.js') {
                        // Radiant's layout runner intentionally keeps one shared
                        // interpolation root; stop later WPT registrations at the
                        // same boundary instead of comparing a different DOM.
                        let source = body.toString('utf8');
                        source = source.replace(
                            'function test_interpolation(options, expectations) {',
                            'function test_interpolation(options, expectations) {\n' +
                            '    if (window.__radiant_layout_interpolation_done) return;\n' +
                            '    window.__radiant_layout_interpolation_done = true;'
                        );
                        source = source.replace(
                            'function test_composition(options, expectations) {',
                            'function test_composition(options, expectations) {\n' +
                            '    if (window.__radiant_layout_interpolation_done) return;'
                        );
                        source = source.replace(
                            '    container.remove();',
                            '    // retain the first interpolation root for layout extraction;\n' +
                            '    // other WPT cleanup, including temporary styles, must still run.\n' +
                            '    if (!window.__radiant_layout_interpolation_done) container.remove();'
                        );
                        body = Buffer.from(source, 'utf8');
                    }
                    await request.respond({
                        status: 200,
                        contentType: contentTypeForPath(resourcePath),
                        body
                    });
                    return;
                }
                await request.continue();
            } catch {
                await request.continue();
            }
        });

        // Load HTML file using file:// URL to preserve relative paths for @font-face
        console.log('📄 Loading HTML file...');
        const fileUrl = `file://${htmlFilePath}`;

        // Inject @font-face for Ahem test font if the test requires it.
        // CSS 2.1 tests reference Ahem by name (font-family: ahem) and expect it
        // to be installed as a system font. Without it, Chrome falls back to a
        // proportional font, producing incorrect reference measurements.
        const htmlContent = await fs.readFile(htmlFilePath, 'utf8');
        const htmlFileSize = Buffer.byteLength(htmlContent, 'utf8');
        const skipComputed = htmlFileSize > 350 * 1024;
        if (skipComputed) {
            console.log(`📏 Large file (${(htmlFileSize / 1024).toFixed(0)}KB > 350KB): omitting computed properties from reference`);
        }
        const needsAhem = /\bahem\b/i.test(htmlContent);

        if (needsAhem) {
            // Find the Ahem font file relative to the HTML file's support/ directory
            // Searches local support/, parent support/, and grandparent support/ for WPT nested dirs
            const htmlDir = path.dirname(htmlFilePath);
            const possiblePaths = [
                path.join(htmlDir, 'support', 'ahem3.ttf'),
                path.join(htmlDir, '..', 'support', 'ahem3.ttf'),
                path.join(htmlDir, '..', '..', 'support', 'ahem3.ttf'),
                path.join(htmlDir, 'support', 'Ahem.ttf'),
                path.join(htmlDir, '..', 'support', 'Ahem.ttf'),
                path.join(htmlDir, '..', '..', 'support', 'Ahem.ttf'),
                path.join(htmlDir, 'support', 'AHEM_default.TTF'),
                path.join(htmlDir, '..', 'support', 'AHEM_default.TTF'),
                path.join(htmlDir, '..', '..', 'support', 'AHEM_default.TTF'),
            ];
            let ahemPath = null;
            for (const p of possiblePaths) {
                try {
                    await fs.access(p);
                    ahemPath = p;
                    break;
                } catch {}
            }
            if (ahemPath) {
                const ahemUrl = `file://${path.resolve(ahemPath)}`;
                // Inject @font-face before page loads so the font is available during layout
                await page.evaluateOnNewDocument((fontUrl) => {
                    document.addEventListener('DOMContentLoaded', () => {
                        const style = document.createElement('style');
                        style.textContent = `
                            @font-face {
                                font-family: 'Ahem';
                                src: url('${fontUrl}') format('truetype');
                                font-weight: normal;
                                font-style: normal;
                            }
                        `;
                        document.head.insertBefore(style, document.head.firstChild);
                    });
                }, ahemUrl);
                console.log(`🔤 Ahem @font-face will be injected from ${path.basename(ahemPath)}`);
            } else {
                console.log('⚠️  Test requires Ahem font but no TTF found in support/');
            }
        }

        await page.goto(fileUrl, { waitUntil: 'networkidle0' });
        await page.evaluate(() => {
            // older mirrored WPT fixtures use the pre-rename trim keywords;
            // Chromium's experimental implementation accepts the current names.
            const aliases = {
                both: 'trim-both',
                start: 'trim-start',
                end: 'trim-end'
            };
            for (const stylesheet of document.styleSheets) {
                let rules;
                try {
                    rules = stylesheet.cssRules;
                } catch {
                    continue;
                }
                for (const rule of rules || []) {
                    if (!rule.style) continue;
                    const value = rule.style.getPropertyValue('text-box-trim').trim();
                    if (aliases[value]) rule.style.setProperty('text-box-trim', aliases[value]);
                }
            }
        });
        // Wait for fonts and layout to stabilize
        await page.evaluate(() => document.fonts.ready);
        await new Promise(resolve => setTimeout(resolve, 200));
        console.log('✅ HTML loaded and rendered');

        // Extract layout data
        console.log('📊 Extracting layout data...');
        const layoutData = await page.evaluate((skipComputed) => {
            // Helper to get className as string (handles SVGAnimatedString for SVG elements)
            const getClassNameString = (element) => {
                if (!element.className) return '';
                // SVG elements have className as SVGAnimatedString with baseVal property
                if (typeof element.className === 'object' && element.className.baseVal !== undefined) {
                    return element.className.baseVal;
                }
                return typeof element.className === 'string' ? element.className : '';
            };

            // Helper to generate enhanced CSS selector
            const generateSelector = (element) => {
                if (element.id) return `#${element.id}`;

                let selector = element.tagName.toLowerCase();
                const classNameStr = getClassNameString(element);
                if (classNameStr) {
                    selector += '.' + classNameStr.split(' ').filter(c => c.trim()).join('.');
                }

                // Add index if there are siblings with same tag
                const parent = element.parentElement;
                if (parent) {
                    const siblings = Array.from(parent.children).filter(s => s.tagName === element.tagName);
                    if (siblings.length > 1) {
                        const index = siblings.indexOf(element);
                        selector += `:nth-of-type(${index + 1})`;
                    }
                }

                return selector;
            };

            // Helper function to extract text node data
            const extractTextNodeData = (textNode, nodeIndex) => {
                try {
                    const text = textNode.textContent;
                    const range = document.createRange();
                    range.selectNodeContents(textNode);
                    const rects = range.getClientRects();

                    // Convert ClientRects to plain objects and round coordinates
                    let rectArray = Array.from(rects).map(rect => ({
                        x: Math.round(rect.left * 100) / 100,
                        y: Math.round(rect.top * 100) / 100,
                        width: Math.round(rect.width * 100) / 100,
                        height: Math.round(rect.height * 100) / 100,
                        right: Math.round(rect.right * 100) / 100,
                        bottom: Math.round(rect.bottom * 100) / 100
                    }));

                    // Additional debugging: check parent element visibility
                    const parentElement = textNode.parentElement;
                    const parentComputed = parentElement ? window.getComputedStyle(parentElement) : null;
                    const isParentVisible = parentComputed ?
                        (parentComputed.display !== 'none' && parentComputed.visibility !== 'hidden') :
                        false;

                    // Enhanced: For multi-line text, return multiple text nodes (one per line) to match Radiant's behavior
                    if (rectArray.length > 1 && text.trim().length > 0) {
                        try {
                            // Use character-by-character analysis to determine line breaks
                            const charPositions = [];
                            for (let i = 0; i < text.length; i++) {
                                range.setStart(textNode, i);
                                range.setEnd(textNode, i + 1);
                                const charRects = range.getClientRects();
                                if (charRects.length > 0) {
                                    const rect = charRects[0];
                                    charPositions.push({
                                        char: text[i],
                                        index: i,
                                        y: Math.round(rect.top * 100) / 100,
                                        x: Math.round(rect.left * 100) / 100
                                    });
                                }
                            }

                            // Group characters by their visual rect, not just Y;
                            // multicolumn fragments in different columns can share Y.
                            const tolerance = 2;
                            const lines = [];
                            rectArray.forEach((sourceRect, rectIndex) => {
                                const right = sourceRect.right || (sourceRect.x + sourceRect.width);
                                const foundLine = lines.find(line =>
                                    Math.abs(line.y - sourceRect.y) <= tolerance &&
                                    Math.max(line.x, sourceRect.x) <=
                                        Math.min(line.right, right) + 3
                                );
                                if (foundLine) {
                                    foundLine.x = Math.min(foundLine.x, sourceRect.x);
                                    foundLine.right = Math.max(foundLine.right, right);
                                    foundLine.rects.push(sourceRect);
                                } else {
                                    lines.push({
                                        y: sourceRect.y,
                                        x: sourceRect.x,
                                        right,
                                        rects: [sourceRect],
                                        chars: [],
                                        order: rectIndex
                                    });
                                }
                            });
                            charPositions.forEach(charData => {
                                let bestLine = null;
                                let bestDistance = Infinity;
                                lines.forEach(line => {
                                    const yDistance = Math.abs(line.y - charData.y);
                                    if (yDistance > tolerance) return;
                                    const xDistance = charData.x < line.x
                                        ? line.x - charData.x
                                        : charData.x > line.right
                                            ? charData.x - line.right
                                            : 0;
                                    const distance = yDistance * 10 + xDistance;
                                    if (distance < bestDistance) {
                                        bestDistance = distance;
                                        bestLine = line;
                                    }
                                });
                                if (bestLine) bestLine.chars.push(charData);
                            });

                            // Keep the browser's visual-rect order, which is DOM order
                            // across columns, rather than sorting columns together by Y.
                            lines.sort((a, b) => a.order - b.order);

                            // Return array of separate text nodes (one per line) to match Radiant's behavior
                            const lineTextNodes = [];
                            lines.forEach((line, lineIndex) => {
                                if (line.chars.length > 0) {
                                    const startIndex = line.chars[0].index;
                                    const endIndex = line.chars[line.chars.length - 1].index + 1;
                                    const segmentText = text.substring(startIndex, endIndex);

                                    // getClientRects() may return separate rects for whitespace
                                    // and non-whitespace segments on the same visual line.
                                    const lineRects = line.rects.filter(r => r.width > 0);
                                    let rect;
                                    if (lineRects.length > 1) {
                                        // Merge all same-line rects into a bounding box
                                        const minX = Math.min(...lineRects.map(r => r.x));
                                        const maxRight = Math.max(...lineRects.map(r => r.right || (r.x + r.width)));
                                        const minY = Math.min(...lineRects.map(r => r.y));
                                        const maxBottom = Math.max(...lineRects.map(r => r.bottom || (r.y + r.height)));
                                        rect = {
                                            x: minX,
                                            y: minY,
                                            width: Math.round((maxRight - minX) * 100) / 100,
                                            height: Math.round((maxBottom - minY) * 100) / 100,
                                            right: maxRight,
                                            bottom: maxBottom
                                        };
                                    } else if (lineRects.length === 1) {
                                        rect = lineRects[0];
                                    } else if (lineIndex < rectArray.length) {
                                        rect = rectArray[lineIndex]; // fallback to index
                                    }
                                    if (!rect) return;

                                    lineTextNodes.push({
                                        nodeType: 'text',
                                        text: segmentText,
                                        length: segmentText.length,
                                        isWhitespaceOnly: !segmentText.trim(),
                                        layout: {
                                            rects: [{
                                                ...rect,
                                                text: segmentText,
                                                startIndex: 0, // Relative to this text segment
                                                endIndex: segmentText.length
                                            }],
                                            hasLayout: true,
                                            parentVisible: isParentVisible,
                                            parentDisplay: parentComputed?.display || 'unknown',
                                            parentVisibility: parentComputed?.visibility || 'unknown'
                                        },
                                        depth: 0, // Will be set by parent
                                        nodeIndex: nodeIndex
                                    });
                                }
                            });

                            range.detach();
                            return lineTextNodes; // Return array instead of single node
                        } catch (mappingError) {
                            // If detailed mapping fails, fall through to single node approach
                            console.warn('Line-based text mapping failed:', mappingError.message);
                        }
                    }

                    // Single line text or fallback - create enhanced rectangle with text mapping
                    if (rectArray.length === 1 && text.trim().length > 0) {
                        rectArray[0].text = text;
                        rectArray[0].startIndex = 0;
                        rectArray[0].endIndex = text.length;
                    }

                    range.detach();

                    return {
                        nodeType: 'text',
                        text: textNode.textContent,
                        length: textNode.textContent.length,
                        isWhitespaceOnly: !textNode.textContent.trim(),
                        layout: {
                            rects: rectArray,
                            hasLayout: rectArray.length > 0,
                            parentVisible: isParentVisible,
                            parentDisplay: parentComputed?.display || 'unknown',
                            parentVisibility: parentComputed?.visibility || 'unknown'
                        },
                        depth: 0, // Will be set by parent
                        nodeIndex: nodeIndex
                    };
                } catch (error) {
                    // Return basic text node data if layout extraction fails
                    return {
                        nodeType: 'text',
                        text: textNode.textContent,
                        length: textNode.textContent.length,
                        isWhitespaceOnly: !textNode.textContent.trim(),
                        layout: {
                            rects: [],
                            hasLayout: false,
                            error: error.message,
                            parentVisible: false,
                            parentDisplay: 'unknown',
                            parentVisibility: 'unknown'
                        },
                        depth: 0,
                        nodeIndex: nodeIndex
                    };
                }
            };

            // Helper function to extract element data
            const extractElementData = (element, elementIndex) => {
                const rect = element.getBoundingClientRect();
                // Only call getComputedStyle when we need to capture CSS properties
                const computed = skipComputed ? null : window.getComputedStyle(element);

                // Generate enhanced selector
                const selector = generateSelector(element);
                const key = selector || `${element.tagName.toLowerCase()}_${elementIndex}`;

                const classNameStr = getClassNameString(element);
                return {
                    nodeType: 'element',
                    selector: key,
                    tag: element.tagName.toLowerCase(),
                    id: element.id || null,
                    classes: classNameStr ? classNameStr.split(' ').filter(c => c.trim()) : [],

                    // Layout properties
                    layout: {
                        x: Math.round(rect.left * 100) / 100,
                        y: Math.round(rect.top * 100) / 100,
                        width: Math.round(rect.width * 100) / 100,
                        height: Math.round(rect.height * 100) / 100,

                        // Content box dimensions
                        contentWidth: element.clientWidth,
                        contentHeight: element.clientHeight,

                        // Scroll dimensions
                        scrollWidth: element.scrollWidth,
                        scrollHeight: element.scrollHeight
                    },

                    // Comprehensive CSS properties (omitted for large files to keep JSON size small)
                    ...(skipComputed ? {} : { computed: {
                        display: computed.display,
                        position: computed.position,

                        // Box model
                        marginTop: parseFloat(computed.marginTop) || 0,
                        marginRight: parseFloat(computed.marginRight) || 0,
                        marginBottom: parseFloat(computed.marginBottom) || 0,
                        marginLeft: parseFloat(computed.marginLeft) || 0,

                        paddingTop: parseFloat(computed.paddingTop) || 0,
                        paddingRight: parseFloat(computed.paddingRight) || 0,
                        paddingBottom: parseFloat(computed.paddingBottom) || 0,
                        paddingLeft: parseFloat(computed.paddingLeft) || 0,

                        borderTopWidth: parseFloat(computed.borderTopWidth) || 0,
                        borderRightWidth: parseFloat(computed.borderRightWidth) || 0,
                        borderBottomWidth: parseFloat(computed.borderBottomWidth) || 0,
                        borderLeftWidth: parseFloat(computed.borderLeftWidth) || 0,

                        // Flexbox properties
                        flexDirection: computed.flexDirection,
                        flexWrap: computed.flexWrap,
                        justifyContent: computed.justifyContent,
                        alignItems: computed.alignItems,
                        alignContent: computed.alignContent,
                        flexGrow: parseFloat(computed.flexGrow) || 0,
                        flexShrink: parseFloat(computed.flexShrink) || 1,
                        flexBasis: computed.flexBasis,
                        alignSelf: computed.alignSelf,
                        order: parseInt(computed.order) || 0,
                        gap: computed.gap,

                        // Typography
                        fontSize: parseFloat(computed.fontSize) || 16,
                        lineHeight: computed.lineHeight,
                        fontFamily: computed.fontFamily,
                        fontWeight: computed.fontWeight,
                        textAlign: computed.textAlign,
                        verticalAlign: computed.verticalAlign,

                        // Positioning
                        top: computed.top,
                        right: computed.right,
                        bottom: computed.bottom,
                        left: computed.left,
                        zIndex: computed.zIndex,

                        // Overflow
                        overflow: computed.overflow,
                        overflowX: computed.overflowX,
                        overflowY: computed.overflowY
                    }}),

                    // Hierarchy information
                    depth: 0,  // Will be calculated during tree building
                    elementIndex: elementIndex
                };
            };

            // Recursive function to build DOM tree in document order
            const buildDOMTree = (node, depth = 0, nodeIndex = 0) => {
                let nodeData;

                if (node.nodeType === Node.ELEMENT_NODE) {
                    // Element node
                    nodeData = extractElementData(node, nodeIndex);
                    nodeData.depth = depth;

                    // Process all child nodes in document order (both elements and text nodes)
                    nodeData.children = [];
                    if (node.childNodes && node.childNodes.length > 0) {
                        for (let i = 0; i < node.childNodes.length; i++) {
                            const childNode = node.childNodes[i];

                            if (childNode.nodeType === Node.ELEMENT_NODE) {
                                // Always include element nodes
                                const childTree = buildDOMTree(childNode, depth + 1, i);
                                nodeData.children.push(childTree);
                            } else if (childNode.nodeType === Node.TEXT_NODE) {
                                // Include text nodes that have layout rectangles OR are hidden (display:none, visibility:hidden)
                                const childResult = buildDOMTree(childNode, depth + 1, i);

                                // Handle case where multi-line text returns multiple text nodes
                                if (Array.isArray(childResult)) {
                                    // Multiple text nodes from line wrapping
                                    childResult.forEach(textNode => {
                                        if (textNode && textNode.layout) {
                                            const hasLayout = textNode.layout.hasLayout && textNode.layout.rects.length > 0;
                                            const isHidden = !textNode.layout.parentVisible ||
                                                           textNode.layout.parentDisplay === 'none' ||
                                                           textNode.layout.parentVisibility === 'hidden';

                                            // Include if it has layout OR if it's hidden (for testing purposes)
                                            if (hasLayout || isHidden) {
                                                textNode.depth = depth + 1;
                                                nodeData.children.push(textNode);
                                            }
                                        }
                                    });
                                } else if (childResult && childResult.layout) {
                                    // Single text node
                                    const hasLayout = childResult.layout.hasLayout && childResult.layout.rects.length > 0;
                                    const isHidden = !childResult.layout.parentVisible ||
                                                   childResult.layout.parentDisplay === 'none' ||
                                                   childResult.layout.parentVisibility === 'hidden';

                                    // Include if it has layout OR if it's hidden (for testing purposes)
                                    if (hasLayout || isHidden) {
                                        nodeData.children.push(childResult);
                                    }
                                }
                                // Only skip text nodes that have no layout AND are not hidden (e.g., whitespace-only nodes)
                            }
                        }
                    }

                } else if (node.nodeType === Node.TEXT_NODE) {
                    // Text node - may return single node or array of nodes for multi-line text
                    const textResult = extractTextNodeData(node, nodeIndex);

                    if (Array.isArray(textResult)) {
                        // Multi-line text returns multiple text nodes
                        textResult.forEach(textNode => {
                            textNode.depth = depth;
                            textNode.children = []; // Text nodes have no children
                        });
                        return textResult; // Return array of text nodes
                    } else {
                        // Single text node
                        textResult.depth = depth;
                        textResult.children = []; // Text nodes have no children
                        return textResult;
                    }
                }

                return nodeData;
            };

            // Start with the root HTML element to build the tree
            const htmlElement = document.documentElement;
            const elementTree = buildDOMTree(htmlElement, 0, 0);

            // Add viewport information to the tree structure
            elementTree.viewport = {
                width: window.innerWidth,
                height: window.innerHeight
            };

            // Add test metadata if available
            const metadataElement = document.getElementById('test-metadata');
            if (metadataElement) {
                try {
                    elementTree.metadata = JSON.parse(metadataElement.textContent);
                } catch (e) {
                    elementTree.metadata = { error: 'Failed to parse metadata' };
                }
            }

            return elementTree;
        }, skipComputed);

        // Helper function to count nodes in tree (elements and text nodes)
        const countNodes = (node) => {
            let count = 1; // Count the current node
            if (node.children && node.children.length > 0) {
                node.children.forEach(child => {
                    count += countNodes(child);
                });
            }
            return count;
        };

        // Helper function to count elements only in tree
        const countElements = (node) => {
            let count = node.nodeType === 'element' ? 1 : 0;
            if (node.children && node.children.length > 0) {
                node.children.forEach(child => {
                    count += countElements(child);
                });
            }
            return count;
        };

        // Helper function to count text nodes only in tree
        const countTextNodes = (node) => {
            let count = node.nodeType === 'text' ? 1 : 0;
            if (node.children && node.children.length > 0) {
                node.children.forEach(child => {
                    count += countTextNodes(child);
                });
            }
            return count;
        };

        // Get browser info for summary reporting
        const devicePixelRatio = await page.evaluate(() => window.devicePixelRatio);
        const userAgent = await page.evaluate(() => navigator.userAgent);
        const viewport = await page.viewport();

        console.log('✅ Layout data extracted');
        console.log(`📈 Found ${countNodes(layoutData)} total nodes (${countElements(layoutData)} elements + ${countTextNodes(layoutData)} text nodes)`);

        // Create enhanced reference JSON with tree structure (minimal browser info)
        const reference = {
            test_file: path.basename(htmlFilePath),
            has_computed_properties: !skipComputed,
            browser_info: {
                viewport: {
                    width: viewport.width,
                    height: viewport.height
                }
            },
            layout_tree: layoutData,  // NEW: Tree structure starting from <html>
            _devicePixelRatio: devicePixelRatio,  // Internal use for summary only
            _userAgent: userAgent,  // Internal use for summary only
            _fullViewport: viewport  // Internal use for summary only
        };

        // Save to reference directory (outputFile path already determined)
        // Ensure output directory exists
        await fs.mkdir(outputDir, { recursive: true });

        // Clean up internal fields before saving
        const cleanedReference = { ...reference };
        delete cleanedReference._devicePixelRatio;
        delete cleanedReference._userAgent;
        delete cleanedReference._fullViewport;

        // Write JSON file
        await fs.writeFile(outputFile, JSON.stringify(cleanedReference, null, 2));

        console.log(`💾 Reference saved to: ${outputFile}`);

        // Show sample of extracted data from tree structure
        console.log('\n📋 Sample extracted data:');
        const showSampleData = (node, depth = 0, maxSamples = 3, currentCount = 0) => {
            if (currentCount >= maxSamples) return currentCount;

            const indent = '  '.repeat(depth);

            if (node.nodeType === 'element') {
                console.log(`  ${indent}${node.selector}: ${node.layout.width}x${node.layout.height} at (${node.layout.x}, ${node.layout.y})`);
            } else if (node.nodeType === 'text') {
                const textPreview = node.text.length > 20 ? node.text.substring(0, 20) + '...' : node.text;
                const layoutInfo = node.layout.hasLayout ?
                    `${node.layout.rects.length} rect(s)` :
                    'no layout';
                console.log(`  ${indent}TEXT: "${textPreview}" (${layoutInfo})`);
            }

            currentCount++;

            if (node.children && node.children.length > 0 && currentCount < maxSamples) {
                for (const child of node.children) {
                    currentCount = showSampleData(child, depth + 1, maxSamples, currentCount);
                    if (currentCount >= maxSamples) break;
                }
            }
            return currentCount;
        };

        showSampleData(layoutData);

        return reference;

    } catch (error) {
        console.error('❌ Error during extraction:', error.message);
        throw error;
    } finally {
        if (browser) {
            await browser.close();
        }
    }
}

async function extractAllTestFiles(category = null, forceRegenerate = false, includeCss21 = false, platform = null) {
    console.log('🔍 Scanning for test HTML files...');
    if (platform) {
        console.log(`📦 Platform-specific reference: ${platform}`);
    }

    const dataDir = path.join(__dirname, 'data');

    // Auto-discover available categories if none specified
    let categories;
    if (category) {
        categories = [category];
    } else {
        try {
            const allEntries = await fs.readdir(dataDir, { withFileTypes: true });
            categories = allEntries
                .filter(entry => entry.isDirectory() && !entry.name.startsWith('.'))
                .filter(entry => includeCss21 || entry.name !== 'css2.1') // Exclude css2.1 unless explicitly included
                .map(entry => entry.name)
                .sort();

            if (!includeCss21 && allEntries.some(entry => entry.name === 'css2.1')) {
                console.log(`📁 Auto-discovered categories: ${categories.join(', ')} (excluded css2.1)`);
                console.log(`   Use --include-css21 flag to include css2.1 suite`);
            } else {
                console.log(`📁 Auto-discovered categories: ${categories.join(', ')}`);
            }
        } catch (error) {
            console.log('⚠️  Could not auto-discover categories, using defaults');
            categories = ['basic', 'intermediate', 'advanced'];
        }
    }

    // Validate single category if specified
    if (category && !categories.includes(category)) {
        console.error(`❌ Invalid category: ${category}. Available categories: ${categories.join(', ')}`);
        process.exit(1);
    }

    let allFiles = [];
    let totalFiles = 0;

    for (const cat of categories) {
        const categoryDir = path.join(dataDir, cat);
        try {
            const files = await fs.readdir(categoryDir, { withFileTypes: true });
            const htmlFiles = files
                .filter(entry => (typeof entry === 'string' ? entry : entry.name).endsWith('.html') || (typeof entry === 'string' ? entry : entry.name).endsWith('.htm'))
                .filter(entry => typeof entry === 'string' || entry.isFile())
                .map(entry => {
                    const name = typeof entry === 'string' ? entry : entry.name;
                    return {
                        category: cat,
                        file: name,
                        path: path.join(categoryDir, name)
                    };
                });

            // Recursively scan subdirectories for HTML files (supports WPT nested layouts
            // like css-text/word-break/auto-phrase/*.html)
            async function scanSubDirs(dir, relPath) {
                const entries = await fs.readdir(dir, { withFileTypes: true });
                for (const entry of entries) {
                    // WPT support/tools directories hold resources and source templates, not runnable tests.
                    if (!entry.isDirectory() || entry.name.startsWith('.') ||
                        entry.name === 'support' || entry.name === 'tools') continue;
                    const subDirPath = path.join(dir, entry.name);
                    const subRelPath = relPath ? `${relPath}/${entry.name}` : entry.name;
                    try {
                        const subFiles = await fs.readdir(subDirPath);
                        const subHtmlFiles = subFiles
                            .filter(file => file.endsWith('.html') || file.endsWith('.htm'))
                            // web-tmpl: only capture index.html from each template directory
                            .filter(file => cat !== 'web-tmpl' || file === 'index.html')
                            .map(file => ({
                                category: cat,
                                file: file,
                                path: path.join(subDirPath, file)
                            }));
                        htmlFiles.push(...subHtmlFiles);
                        if (subHtmlFiles.length > 0) {
                            console.log(`   📁 Found ${subHtmlFiles.length} HTML files in ${cat}/${subRelPath}/`);
                        }
                        // Recurse deeper (skip for web-tmpl: only top-level template dirs matter)
                        if (cat !== 'web-tmpl') {
                            await scanSubDirs(subDirPath, subRelPath);
                        }
                    } catch (error) {
                        // Skip unreadable subdirectories
                    }
                }
            }
            await scanSubDirs(categoryDir, '');

            allFiles = allFiles.concat(htmlFiles);
            totalFiles += htmlFiles.length;
            console.log(`📁 Found ${htmlFiles.length} HTML files in ${cat}/`);
        } catch (error) {
            console.log(`⚠️  Category ${cat}/ not found or empty`);
        }
    }

    if (totalFiles === 0) {
        console.log('❌ No HTML test files found');
        return;
    }

    console.log(`\n🎯 Processing ${totalFiles} test files...`);
    console.log('==========================================');

    let successCount = 0;
    let failCount = 0;
    let skippedCount = 0;
    const results = [];

    for (const fileInfo of allFiles) {
        console.log(`\n📄 Processing: ${fileInfo.category}/${fileInfo.file}`);

        try {
            const result = await extractLayoutFromFile(fileInfo.path, forceRegenerate, platform, fileInfo.category);
            const wasSkipped = result._wasSkipped || false;
            delete result._wasSkipped; // Clean up the flag

            // Helper to count nodes in tree (for compatibility with new format)
            const countNodesInResult = (result) => {
                if (result.layout_tree) {
                    // New tree format - count all nodes (elements and text)
                    const countAllNodes = (node) => {
                        let count = 1; // Current node
                        if (node.children && node.children.length > 0) {
                            node.children.forEach(child => {
                                count += countAllNodes(child);
                            });
                        }
                        return count;
                    };
                    return countAllNodes(result.layout_tree);
                } else if (result.layout_data) {
                    // Legacy flat format
                    return Object.keys(result.layout_data).length;
                } else {
                    return 0;
                }
            };

            const nodeCount = countNodesInResult(result);

            results.push({
                ...fileInfo,
                success: true,
                wasSkipped: wasSkipped,
                nodeCount: nodeCount,
                result: result
            });

            if (wasSkipped) {
                skippedCount++;
                console.log(`⏭️  Skipped: ${nodeCount} nodes (file already exists)`);
            } else {
                successCount++;
                console.log(`✅ Success: ${nodeCount} nodes extracted`);
            }
        } catch (error) {
            results.push({
                ...fileInfo,
                success: false,
                error: error.message
            });
            failCount++;
            console.log(`❌ Failed: ${error.message}`);
        }
    }

    // Generate summary
    console.log('\n📊 Extraction Summary');
    console.log('=====================');
    console.log(`Total files processed: ${totalFiles}`);
    console.log(`✅ Generated: ${successCount}`);
    console.log(`⏭️  Skipped (already exist): ${skippedCount}`);
    console.log(`❌ Failed: ${failCount}`);
    console.log(`📈 Success rate: ${Math.round((successCount + skippedCount) / totalFiles * 100)}%`);

    // Show detailed results
    console.log('\n📋 Detailed Results:');
    results.forEach(result => {
        let status, details;
        if (result.success) {
            status = result.wasSkipped ? '⏭️ ' : '✅';
            const action = result.wasSkipped ? 'skipped' : 'generated';
            details = `${result.nodeCount} nodes (${action})`;
        } else {
            status = '❌';
            details = `Error: ${result.error}`;
        }
        console.log(`  ${status} ${result.category}/${result.file} - ${details}`);
    });

    return results;
}

// Main execution
async function main() {
    const args = process.argv.slice(2);

    console.log('🎯 Radiant Layout Browser Reference Extractor');
    console.log('==============================================');

    // Parse arguments
    let singleFile = null;
    let category = null;
    let showHelp = false;
    let forceRegenerate = false;
    let includeCss21 = false;
    let platform = null;

    for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        if (arg === '--help' || arg === '-h') {
            showHelp = true;
        } else if (arg === '--category' || arg === '-c') {
            category = args[++i];
            // Validate category exists (we'll check this later when scanning directories)
        } else if (arg === '--force' || arg === '-f') {
            forceRegenerate = true;
        } else if (arg === '--include-css21') {
            includeCss21 = true;
        } else if (arg === '--platform' || arg === '-p') {
            platform = args[++i];
            // Validate platform value
            const validPlatforms = ['linux', 'darwin', 'win32'];
            if (!validPlatforms.includes(platform)) {
                console.error(`❌ Invalid platform: ${platform}. Valid values: ${validPlatforms.join(', ')}`);
                process.exit(1);
            }
        } else if (arg.endsWith('.html') || arg.endsWith('.htm')) {
            singleFile = arg;
        } else {
            console.error(`❌ Unknown argument: ${arg}`);
            showHelp = true;
        }
    }

    if (showHelp) {
        console.log(`
Usage: node extract_browser_references.js [options] [html_file]

Options:
  --category, -c <name>   Extract only from specific category (auto-discovered from data/ directory)
  --platform, -p <name>   Generate platform-specific reference (linux, darwin, win32)
                          Output: <test_name>.<platform>.json (e.g., test_name.linux.json)
  --force, -f             Force regeneration of existing reference files
  --include-css21         Include css2.1 test suite (excluded by default)
  --help, -h              Show this help message

Arguments:
  html_file               Path to a single HTML or HTM file to extract (optional)

Examples:
  node extract_browser_references.js                                    # Extract all test files (excludes css2.1)
  node extract_browser_references.js --category baseline                # Extract only baseline tests
  node extract_browser_references.js --platform linux --category baseline  # Extract baseline as Linux-specific
  node extract_browser_references.js --include-css21                    # Extract all including css2.1 suite
  node extract_browser_references.js --force                           # Force regenerate all references
  node extract_browser_references.js data/basic/flex_001.html           # Extract single .html file
  node extract_browser_references.js data/css2.1/blocks-001.htm         # Extract single .htm file
  node extract_browser_references.js --platform linux data/baseline/test.html  # Single file, Linux-specific

Generated files:
  reference/<test_name>.json                                # Generic reference files
  reference/<test_name>.<platform>.json                     # Platform-specific reference files

Note: By default, existing reference files are skipped. Use --force to regenerate them.
      The css2.1 test suite is excluded by default due to its size. Use --include-css21 to include it.
      Both .html and .htm file extensions are supported.
`);
        process.exit(0);
    }

    try {
        if (singleFile) {
            // Single file mode - resolve path correctly
            let resolvedPath = singleFile;

            // If path starts with 'test/', it's relative to project root, so adjust for current directory
            if (singleFile.startsWith('test/')) {
                resolvedPath = path.join(__dirname, '..', '..', singleFile);
            }
            // If path starts with '../', it's already relative to layout directory
            else if (!path.isAbsolute(singleFile)) {
                resolvedPath = path.resolve(singleFile);
            }

            console.log(`📍 Resolved path: ${resolvedPath}`);
            if (platform) {
                console.log(`📦 Platform-specific reference: ${platform}`);
            }
            // Detect category from file path for correct reference directory
            const singleCategory = category || (() => {
                const dataIdx = resolvedPath.indexOf('/data/');
                if (dataIdx >= 0) {
                    const afterData = resolvedPath.substring(dataIdx + 6);
                    const cat = afterData.split('/')[0];
                    return cat;
                }
                return null;
            })();
            await fs.access(resolvedPath);
            const result = await extractLayoutFromFile(resolvedPath, forceRegenerate, platform, singleCategory);

            // Count all nodes in tree structure (elements and text nodes)
            const countTreeNodes = (node) => {
                let count = 1; // Current node
                if (node.children && node.children.length > 0) {
                    node.children.forEach(child => {
                        count += countTreeNodes(child);
                    });
                }
                return count;
            };

            const nodeCount = result.layout_tree ? countTreeNodes(result.layout_tree) : 0;

            console.log(`\n🎉 Extraction completed successfully!`);
            console.log(`✅ Reference JSON created with ${nodeCount} nodes in tree structure`);
        } else {
            // Batch mode
            await extractAllTestFiles(category, forceRegenerate, includeCss21, platform);
            console.log('\n🎉 Batch extraction completed!');
        }

    } catch (error) {
        if (error.code === 'ENOENT') {
            console.error(`❌ File not found: ${singleFile}`);
        } else {
            console.error('❌ Extraction failed:', error.message);
        }
        process.exit(1);
    }
}

// Run if called directly
if (require.main === module) {
    main().catch(console.error);
}

module.exports = { extractLayoutFromFile, extractAllTestFiles };
