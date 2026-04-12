

/*---
esid: sec-array.prototype.every
description: Array.prototype.every applied to boolean primitive
---*/

assert.sameValue(
  Array.prototype.every.call(true, () => {}),
  true,
  'Array.prototype.every.call(true, () => {}) must return true'
);
assert.sameValue(
  Array.prototype.every.call(false, () => {}),
  true,
  'Array.prototype.every.call(false, () => {}) must return true'
);
