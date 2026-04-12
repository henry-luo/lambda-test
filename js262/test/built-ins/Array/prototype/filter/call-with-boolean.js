

/*---
esid: sec-array.prototype.filter
description: Array.prototype.filter applied to boolean primitive
includes: [compareArray.js]
---*/

assert.compareArray(
  Array.prototype.filter.call(true, () => {}),
  [],
  'Array.prototype.filter.call(true, () => {}) must return []'
);
assert.compareArray(
  Array.prototype.filter.call(false, () => {}),
  [],
  'Array.prototype.filter.call(false, () => {}) must return []'
);
