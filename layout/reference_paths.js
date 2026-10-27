const path = require('path');
const fs = require('fs');

const LAYOUT_FILE_EXTENSIONS = new Set(['.html', '.htm', '.xht']);

function layoutFileExtension(filePath) {
    const extension = path.extname(filePath).toLowerCase();
    return LAYOUT_FILE_EXTENSIONS.has(extension) ? extension : null;
}

function isLayoutFile(filePath) {
    return layoutFileExtension(filePath) !== null;
}

/**
 * Return the on-disk reference key for a layout fixture.
 * Nested fixtures need their relative directory to remain part of the key;
 * otherwise sibling directories can silently share a basename reference.
 */
function referenceNameForPath(htmlFilePath, category = null) {
    const extension = layoutFileExtension(htmlFilePath);
    const fileName = path.basename(htmlFilePath);
    const baseName = extension ? fileName.slice(0, -extension.length) : fileName;
    if (baseName === 'index' &&
        (category === 'web-tmpl' || htmlFilePath.includes(`${path.sep}web-tmpl${path.sep}`))) {
        return path.basename(path.dirname(htmlFilePath));
    }

    if (category) {
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
                .replace(/\.(html|htm|xht)$/i, '')
                .split(path.sep)
                .join('__');
        }
    }
    return baseName;
}

module.exports = { isLayoutFile, layoutFileExtension, referenceNameForPath };
