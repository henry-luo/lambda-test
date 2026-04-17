

/*---
esid: sec-array.prototype.toReversed
description: >
  Array.prototype.toReversed returns a new array even if it has zero or one elements
features: [change-array-by-copy]
includes: [compareArray.js]
---*/

var zero = [];
var zeroReversed = zero.toReversed();
assert.notSameValue(zero, zeroReversed);
assert.compareArray(zero, zeroReversed);

var one = [1];
var oneReversed = one.toReversed();
assert.notSameValue(one, oneReversed);
assert.compareArray(one, oneReversed);
