

/*---
esid: sec-array.prototype.flat
description: >
    arrays with empty arrays elements
includes: [compareArray.js]
features: [Array.prototype.flat]
---*/

var a = {};
assert.compareArray([].flat(), [], '[].flat() must return []');
assert.compareArray([
  [],
  []
].flat(), [], '[ [], [] ].flat() must return []');
assert.compareArray([
  [],
  [1]
].flat(), [1], '[ [], [1] ].flat() must return [1]');
assert.compareArray([
  [],
  [1, a]
].flat(), [1, a], '[ [], [1, a] ].flat() must return [1, a]');
