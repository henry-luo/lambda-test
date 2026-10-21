// explicit, source-checked standards controls for a browser implementation gap.
'use strict';

function validScalar(value) {
    return Number.isInteger(value) && value >= 0 && value <= 0x10FFFF &&
        !(value >= 0xD800 && value <= 0xDFFF);
}

function referenceControlIsValid(control) {
    if (!control || !control.specification || !control.reason) return false;
    const stylesheet = typeof control.stylesheet === 'string' && control.stylesheet.trim();
    const mappings = control.text_codepoints;
    if (mappings !== undefined && (!Array.isArray(mappings) || mappings.length === 0 ||
            !mappings.every(entry => entry && validScalar(entry.from) && validScalar(entry.to) && entry.from !== entry.to) ||
            new Set(mappings.map(entry => entry.from)).size !== mappings.length)) return false;
    return Boolean(stylesheet || mappings?.length);
}

// this function runs inside the capture page; substitutions preserve the element/style tree.
function applyReferenceTextCodepoints(mappings) {
    const replacements = new Map(mappings.map(entry => [entry.from, String.fromCodePoint(entry.to)]));
    const walker = document.createTreeWalker(document, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
        const node = walker.currentNode;
        const replaced = Array.from(node.data, value => replacements.get(value.codePointAt(0)) ?? value).join('');
        if (replaced !== node.data) node.data = replaced;
    }
}

module.exports = { referenceControlIsValid, applyReferenceTextCodepoints };
