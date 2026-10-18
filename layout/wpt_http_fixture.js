// HTTP-dependent mirrored fixtures need WPT template substitution and real CORS origins.
const fs = require('fs').promises;
const path = require('path');
const { spawn } = require('child_process');
let service;
let port;

async function startServer(projectRoot) {
    if (!service) service = new Promise((resolve, reject) => {
        const child = spawn(process.env.PYTHON || 'python3',
            [path.join(__dirname, 'wpt_http_server.py'), path.join(projectRoot, 'ref', 'wpt')],
            {env: {...process.env, PYTHONDONTWRITEBYTECODE: '1'}, stdio: ['pipe', 'pipe', 'pipe']});
        let output = '', diagnostics = '', ready = false;
        const timeout = setTimeout(() => {
            child.kill(); reject(new Error(`WPT HTTP startup timed out: ${diagnostics}`));
        }, 10000);
        child.stderr.on('data', data => { diagnostics += data; });
        child.once('error', error => { clearTimeout(timeout); reject(error); });
        child.once('exit', code => {
            clearTimeout(timeout);
            if (!ready) reject(new Error(`WPT HTTP startup failed (${code}): ${diagnostics}`));
        });
        child.stdout.on('data', data => {
            output += data;
            const newline = output.indexOf('\n');
            if (ready || newline < 0) return;
            try {
                port = JSON.parse(output.slice(0, newline)).port;
                if (!Number.isInteger(port) || port <= 0) throw new Error('invalid WPT port');
                ready = true; clearTimeout(timeout);
                // EOF on runner exit stops Python; idle pipes must not keep Node alive.
                child.unref(); child.stdin.unref(); child.stdout.unref(); child.stderr.unref();
                resolve(port);
            } catch (error) { child.kill(); clearTimeout(timeout); reject(error); }
        });
    });
    return service;
}

async function layoutFixtureUrl(htmlFile, projectRoot) {
    const relative = path.relative(await fs.realpath(path.join(__dirname, 'data')),
        await fs.realpath(htmlFile));
    const [category, ...parts] = relative.split(path.sep);
    if (!category.startsWith('wpt-css-') || parts.length === 0) return null;
    const source = await fs.readFile(htmlFile);
    if (!/<script\b[^>]*\bsrc\s*=\s*(?:['"][^'"]*\/get-host-info\.sub\.js['"]|[^\s>]*\/get-host-info\.sub\.js(?=[\s>]))/i.test(source.toString())) return null;
    const wptPath = ['css', category.slice('wpt-'.length), ...parts];
    const pinned = await fs.readFile(path.join(projectRoot, 'ref', 'wpt', ...wptPath));
    if (!source.equals(pinned)) throw new Error(`HTTP fixture differs from pinned WPT: ${htmlFile}`);
    const serverPort = await startServer(projectRoot);
    return `http://localhost:${serverPort}/${wptPath.map(encodeURIComponent).join('/')}`;
}

function ownsFixtureUrl(url) {
    if (!port) return false;
    try {
        const parsed = new URL(url);
        return parsed.protocol === 'http:' && parsed.port === String(port) &&
            ['localhost', '127.0.0.1'].includes(parsed.hostname);
    } catch { return false; }
}

module.exports = {layoutFixtureUrl, ownsFixtureUrl};
