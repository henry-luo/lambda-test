#!/usr/bin/env node
/**
 * capture_render_references.js
 *
 * Captures browser-rendered PNG references for Radiant render regression tests.
 * Uses Puppeteer to open each test HTML page at 100×100 viewport and screenshot.
 *
 * Usage:
 *   node capture_render_references.js                     # Capture all (skip existing)
 *   node capture_render_references.js --test bg_color_01  # Capture one test
 *   node capture_render_references.js --force             # Re-capture all
 *   node capture_render_references.js --platform linux    # Platform-specific refs
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const os = require('os');

let   PAGE_DIR = path.join(__dirname, 'page');
const REF_DIR  = path.join(__dirname, 'reference');
const LAMBDA_ROOT = process.env.LAMBDA_ROOT || path.resolve(__dirname, '..', '..');

const DEFAULT_VIEWPORT_WIDTH  = 100;
const DEFAULT_VIEWPORT_HEIGHT = 100;

function localTempDir(name) {
    const tempRoot = path.join(LAMBDA_ROOT, 'temp');
    fs.mkdirSync(tempRoot, { recursive: true });
    const dir = path.join(tempRoot, `${name}-${process.pid}`);
    fs.mkdirSync(dir, { recursive: true });
    return dir;
}

function findChromeHeadlessShell() {
    const explicitPath = process.env.CHROME_HEADLESS_SHELL || process.env.PUPPETEER_EXECUTABLE_PATH;
    if (explicitPath && fs.existsSync(explicitPath)) {
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
        const versions = fs.readdirSync(cacheRoot).sort().reverse();
        for (const version of versions) {
            const candidate = path.join(cacheRoot, version, archDir, 'chrome-headless-shell');
            if (fs.existsSync(candidate)) {
                return candidate;
            }
        }
    } catch (e) {
        // fall through to Puppeteer's default executable.
    }
    return null;
}

function browserLaunchOptions() {
    const launchOptions = {
        headless: true,
        args: [
            '--no-sandbox',
            '--disable-gpu',
            '--font-render-hinting=none',
            '--disable-lcd-text',
            '--disable-font-subpixel-positioning'
        ],
        userDataDir: localTempDir('puppeteer-render-profile')
    };

    const headlessShell = findChromeHeadlessShell();
    if (headlessShell) {
        console.log(`📦 Using Chrome headless shell: ${headlessShell}`);
        launchOptions.executablePath = headlessShell;
    }
    return launchOptions;
}

function getTestConfig(testName) {
    const configPath = path.join(PAGE_DIR, `${testName}.config.json`);
    if (fs.existsSync(configPath)) {
        try { return JSON.parse(fs.readFileSync(configPath, 'utf-8')); }
        catch (e) { /* ignore */ }
    }
    return {};
}

function parseArgs() {
    const args = process.argv.slice(2);
    const opts = { force: false, test: null, platform: null, suite: null };
    for (let i = 0; i < args.length; i++) {
        if (args[i] === '--force' || args[i] === '-f') {
            opts.force = true;
        } else if ((args[i] === '--test' || args[i] === '-t') && args[i + 1]) {
            opts.test = args[++i].replace(/\.html$/, '');
        } else if ((args[i] === '--platform' || args[i] === '-p') && args[i + 1]) {
            opts.platform = args[++i];
        } else if ((args[i] === '--suite' || args[i] === '-s') && args[i + 1]) {
            opts.suite = args[++i];
        }
    }
    return opts;
}

function getRefPath(testName, platform) {
    if (platform) {
        return path.join(REF_DIR, `${testName}.${platform}.png`);
    }
    return path.join(REF_DIR, `${testName}.png`);
}

async function main() {
    const opts = parseArgs();

    // apply suite override
    if (opts.suite) {
        PAGE_DIR = path.join(__dirname, opts.suite);
        if (!fs.existsSync(PAGE_DIR)) {
            console.error(`\u274c Suite directory not found: ${PAGE_DIR}`);
            process.exit(1);
        }
    }

    // ensure reference dir exists
    if (!fs.existsSync(REF_DIR)) {
        fs.mkdirSync(REF_DIR, { recursive: true });
    }

    // discover test files
    let htmlFiles;
    if (opts.test) {
        const htmlPath = path.join(PAGE_DIR, `${opts.test}.html`);
        if (!fs.existsSync(htmlPath)) {
            console.error(`❌ Test file not found: ${htmlPath}`);
            process.exit(1);
        }
        htmlFiles = [`${opts.test}.html`];
    } else {
        htmlFiles = fs.readdirSync(PAGE_DIR)
            .filter(f => f.endsWith('.html'))
            .sort();
    }

    if (htmlFiles.length === 0) {
        console.log('⚠️  No HTML test pages found in', PAGE_DIR);
        return;
    }

    // filter out already-captured (unless --force)
    const toCapture = [];
    for (const file of htmlFiles) {
        const testName = file.replace(/\.html$/, '');
        const refPath = getRefPath(testName, opts.platform);
        if (!opts.force && fs.existsSync(refPath)) {
            console.log(`  ⏭️  SKIP  ${testName} (reference exists)`);
        } else {
            toCapture.push({ file, testName });
        }
    }

    if (toCapture.length === 0) {
        console.log('✅ All references up to date. Use --force to re-capture.');
        return;
    }

    console.log(`\n🖼️  Capturing ${toCapture.length} browser reference(s)...\n`);

    const browser = await puppeteer.launch(browserLaunchOptions());

    let captured = 0;
    let failed = 0;

    for (const { file, testName } of toCapture) {
        const page = await browser.newPage();
        try {
            const cfg = getTestConfig(testName);
            const vw = cfg.referenceViewportWidth  || cfg.viewportWidth  || DEFAULT_VIEWPORT_WIDTH;
            const vh = cfg.referenceViewportHeight || cfg.viewportHeight || DEFAULT_VIEWPORT_HEIGHT;
            const deviceScaleFactor = cfg.referenceDeviceScaleFactor || 1;

            await page.setViewport({
                width: vw,
                height: vh,
                deviceScaleFactor
            });

            const fileUrl = `file://${path.join(PAGE_DIR, file)}`;
            await page.goto(fileUrl, { waitUntil: 'networkidle0', timeout: 10000 });

            // small delay to ensure rendering is fully settled
            await new Promise(r => setTimeout(r, 100));

            const refPath = getRefPath(testName, opts.platform);
            await page.screenshot({
                path: refPath,
                type: 'png',
                clip: { x: 0, y: 0, width: vw, height: vh }
            });

            console.log(`  ✅ ${testName}`);
            captured++;
        } catch (err) {
            console.error(`  ❌ ${testName}: ${err.message}`);
            failed++;
        } finally {
            await page.close();
        }
    }

    await browser.close();

    console.log(`\n📊 Captured: ${captured}, Failed: ${failed}, Total: ${toCapture.length}`);
    if (failed > 0) {
        process.exit(1);
    }
}

main().catch(err => {
    console.error('Fatal error:', err);
    process.exit(1);
});
