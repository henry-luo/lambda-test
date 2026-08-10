const path = require('path');
const fs = require('fs');

/**
 * Return the on-disk reference key for a layout fixture.
 * Nested WPT fixtures need their relative directory to remain part of the key;
 * otherwise sibling suites can silently share a basename reference.
 */
function referenceNameForPath(htmlFilePath, category = null) {
    const ext = htmlFilePath.endsWith('.htm') && !htmlFilePath.endsWith('.html')
        ? '.htm'
        : '.html';
    const baseName = path.basename(htmlFilePath, ext);
    const isWpt = (category && category.startsWith('wpt-')) ||
        htmlFilePath.includes(`${path.sep}wpt${path.sep}`) ||
        htmlFilePath.includes('/wpt/');

    if (isWpt && category) {
        const resolvePath = filePath => {
            try {
                return fs.realpathSync.native(filePath);
            } catch {
                return path.resolve(filePath);
            }
        };
        const categoryRoot = resolvePath(path.join(__dirname, 'data', category));
        const relativePath = path.relative(categoryRoot, resolvePath(htmlFilePath));
        if (relativePath && !relativePath.startsWith(`..${path.sep}`) &&
            relativePath !== '..' && path.dirname(relativePath) !== '.') {
            return relativePath
                .replace(/\.(html|htm)$/i, '')
                .split(path.sep)
                .join('__');
        }
    }

    if (baseName === 'index' &&
        (category === 'web-tmpl' || htmlFilePath.includes(`${path.sep}web-tmpl${path.sep}`))) {
        return path.basename(path.dirname(htmlFilePath));
    }
    return baseName;
}

module.exports = { referenceNameForPath };
