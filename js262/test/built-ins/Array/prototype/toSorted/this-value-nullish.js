

/*---
esid: sec-array.prototype.tosorted
description: >
  Array.prototype.toSorted throws if the receiver is null or undefined
info: |
  Array.prototype.toSorted ( compareFn )

  1. Let O be ? ToObject(this value).
  ...
features: [change-array-by-copy]
---*/

assert.throws(TypeError, () => {
  Array.prototype.toSorted.call(null);
});

assert.throws(TypeError, () => {
  Array.prototype.toSorted.call(undefined);
});
