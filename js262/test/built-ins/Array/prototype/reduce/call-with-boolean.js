

/*---
esid: sec-array.prototype.reduce
description: Array.prototype.reduce applied to boolean primitive
---*/

assert.sameValue(
  Array.prototype.reduce.call(true, () => {}, -1),
  -1,
  'Array.prototype.reduce.call(true, () => {}, -1) must return -1'
);
assert.sameValue(
  Array.prototype.reduce.call(false, () => {}, -1),
  -1,
  'Array.prototype.reduce.call(false, () => {}, -1) must return -1'
);
