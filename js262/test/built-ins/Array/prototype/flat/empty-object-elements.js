

/*---
esid: sec-array.prototype.flat
description: >
    arrays with empty object elements
includes: [compareArray.js]
features: [Array.prototype.flat]
---*/

var a = {},
  b = {};

assert.compareArray([a].flat(), [a], '[a].flat() must return [a]');
assert.compareArray([a, [b]].flat(), [a, b], '[a, [b]].flat() must return [a, b]');
assert.compareArray([
  [a], b
].flat(), [a, b], '[ [a], b ].flat() must return [a, b]');
assert.compareArray([
  [a],
  [b]
].flat(), [a, b], '[ [a], [b] ].flat() must return [a, b]');
