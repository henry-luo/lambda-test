

/*---
esid: sec-array.prototype.slice
description: Array.prototype.slice applied to boolean primitive
includes: [compareArray.js]
---*/

assert.compareArray(Array.prototype.slice.call(true), [], 'Array.prototype.slice.call(true) must return []');
assert.compareArray(Array.prototype.slice.call(false), [], 'Array.prototype.slice.call(false) must return []');
