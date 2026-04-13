

/*---
esid: sec-array.prototype.toSorted
description: >
  Array.prototype.toSorted returns a new array even if it has zero or one elements
features: [change-array-by-copy]
includes: [compareArray.js]
---*/

var zero = [];
var zeroReversed = zero.toSorted();
assert.notSameValue(zero, zeroReversed);
assert.compareArray(zero, zeroReversed);

var one = [1];
var oneReversed = one.toSorted();
assert.notSameValue(one, oneReversed);
assert.compareArray(one, oneReversed);
