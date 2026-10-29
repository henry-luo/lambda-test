const assert = require('node:assert/strict');
const {RadiantLayoutTester} = require('./test_radiant_layout');

const tester = new RadiantLayoutTester({tolerance: 0.01, json: true});
const text = (content, x, width, y = 4, height = 11) =>
    ({type: 'text', node: {type: 'text', content, layout: {x, y, width, height}}});
const reference = (content, boxes, nested = true) => ({type: 'text', node: {
    nodeType: 'text', text: content,
    ...(nested ? {layout: {rects: boxes}} : {rects: boxes})
}});
const rect = (x, width, y = 4, height = 11) => ({x, y, width, height});
const merge = (pieces, refs) => tester.mergeConsecutiveTextNodes(pieces, refs);
const compare = (pieces, ref) => {
    const merged = merge(pieces, [ref]);
    assert.equal(merged.length, 1);
    return tester.compareNodes(merged[0].node, ref.node);
};

for (const nested of [true, false]) {
    const pieces = [text('\u202Ea', 85.1, 6), text('\u202Dbc', 19, 12)];
    const original = structuredClone(pieces);
    const ref = reference('\u202Ea\u202Dbc', [rect(19, 72.1)], nested);
    assert.equal(compare(pieces, ref).matchedTextNodes, 1,
        'merge disconnected visual intervals into the legacy source query bounds');
    assert.deepEqual(pieces, original, 'normalization must not mutate captured fragments');
}

const direct = {type: 'text', node: {nodeType: 'text', text: 'ab', layout: rect(10, 35)}};
assert.equal(compare([text('a', 10, 10), text('b', 40, 5)], direct).matchedTextNodes, 1);

const wrongExtra = [text('a', 10, 10), text('b', 100, 10)];
const wrongResult = compare(wrongExtra, reference('ab', [rect(10, 10)]));
assert.equal(wrongResult.matchedTextNodes, 0,
    'a later misplaced piece must fail even when the first piece matches');
assert.equal(wrongResult.differences[0].type, 'text_layout_mismatch');

assert.equal(compare([text('a', 10, 20), text('b', 20, 20)],
    reference('ab', [rect(10, 30)])).matchedTextNodes, 1,
    'overlapping fragments use their union rather than the sum of their widths');

const modern = [text('a', 85.1, 6), text('bc', 19, 12)];
assert.equal(merge(modern, [reference('a', [rect(85.1, 6)]),
    reference('bc', [rect(19, 12)])]), modern,
    'fragment-aware references compare each source fragment without normalization');

const wrapped = [text('a', 10, 20), text('b', 5, 30, 15)];
assert.deepEqual(merge(wrapped, [reference('ab', [rect(10, 20), rect(5, 30, 15)])])[0].node.layout,
    wrapped[0].node.layout, 'legacy multi-rect captures retain their first-line convention');
assert.deepEqual(merge(wrapped, [reference('ab', [rect(10, 20)])])[0].node.layout,
    wrapped[0].node.layout, 'different physical lines must not be joined into one line');

const sameLineMultiRect = [text('a', 10, 10), text('b', 40, 10)];
assert.deepEqual(merge(sameLineMultiRect, [reference('ab', [rect(10, 10), rect(40, 10)])])[0].node.layout,
    sameLineMultiRect[0].node.layout, 'a multi-rect reference continues to select its first rect');
console.log('Text fragment normalization: legacy unions, misplaced pieces, overlap, modern and wrapped references passed');
