

/*---
esid: sec-array.prototype.toReversed
description: >
  Array.prototype.toReversed throws if the receiver is null or undefined
info: |
  Array.prototype.toReversed ( )

  1. Let O be ? ToObject(this value).
  ...
features: [change-array-by-copy]
---*/

assert.throws(TypeError, () => {
  Array.prototype.toReversed.call(null);
});

assert.throws(TypeError, () => {
  Array.prototype.toReversed.call(undefined);
});
