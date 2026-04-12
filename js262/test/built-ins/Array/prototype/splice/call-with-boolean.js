

/*---
esid: sec-array.prototype.splice
description: Array.prototype.splice applied to boolean primitive
includes: [compareArray.js]
---*/

assert.compareArray(Array.prototype.splice.call(true), [], 'Array.prototype.splice.call(true) must return []');
assert.compareArray(Array.prototype.splice.call(false), [], 'Array.prototype.splice.call(false) must return []');
