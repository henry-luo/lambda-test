

/*---
esid: sec-array.prototype.findlast
description: Array.prototype.findLast applied to boolean primitive.
features: [array-find-from-last]
---*/

assert.sameValue(
  Array.prototype.findLast.call(true, () => {}),
  undefined,
  'Array.prototype.findLast.call(true, () => {}) must return undefined'
);
assert.sameValue(
  Array.prototype.findLast.call(false, () => {}),
  undefined,
  'Array.prototype.findLast.call(false, () => {}) must return undefined'
);
