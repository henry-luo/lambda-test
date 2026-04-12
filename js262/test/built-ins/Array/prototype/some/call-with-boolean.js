

/*---
esid: sec-array.prototype.some
description: Array.prototype.some applied to boolean primitive
---*/

assert.sameValue(
  Array.prototype.some.call(true, () => {}),
  false,
  'Array.prototype.some.call(true, () => {}) must return false'
);
assert.sameValue(
  Array.prototype.some.call(false, () => {}),
  false,
  'Array.prototype.some.call(false, () => {}) must return false'
);
