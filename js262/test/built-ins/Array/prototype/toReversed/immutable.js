

/*---
esid: sec-array.prototype.toReversed
description: >
  Array.prototype.toReversed does not mutate its this value
features: [change-array-by-copy]
includes: [compareArray.js]
---*/

var arr = [0, 1, 2];
arr.toReversed();

assert.compareArray(arr, [0, 1, 2]);
assert.notSameValue(arr.toReversed(), arr);
