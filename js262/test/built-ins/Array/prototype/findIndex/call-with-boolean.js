

/*---
esid: sec-array.prototype.findindex
description: Array.prototype.findIndex applied to boolean primitive
---*/

assert.sameValue(
  Array.prototype.findIndex.call(true, () => {}),
  -1,
  'Array.prototype.findIndex.call(true, () => {}) must return -1'
);
assert.sameValue(
  Array.prototype.findIndex.call(false, () => {}),
  -1,
  'Array.prototype.findIndex.call(false, () => {}) must return -1'
);
