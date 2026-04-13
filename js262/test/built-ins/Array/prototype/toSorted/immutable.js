

/*---
esid: sec-array.prototype.toSorted
description: >
  Array.prototype.toSorted does not mutate its this value
features: [change-array-by-copy]
includes: [compareArray.js]
---*/

var arr = [2, 0, 1];
arr.toSorted();

assert.compareArray(arr, [2, 0, 1]);
assert.notSameValue(arr.toSorted(), arr);
