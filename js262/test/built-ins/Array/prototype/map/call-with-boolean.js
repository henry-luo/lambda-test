

/*---
esid: sec-array.prototype.map
description: Array.prototype.map applied to boolean primitive
includes: [compareArray.js]
---*/

assert.compareArray(
  Array.prototype.map.call(true, () => {}),
  [],
  'Array.prototype.map.call(true, () => {}) must return []'
);
assert.compareArray(
  Array.prototype.map.call(false, () => {}),
  [],
  'Array.prototype.map.call(false, () => {}) must return []'
);
