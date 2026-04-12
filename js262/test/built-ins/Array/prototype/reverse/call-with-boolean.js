

/*---
esid: sec-array.prototype.reverse
description: Array.prototype.reverse applied to boolean primitive
---*/

assert.sameValue(
  Array.prototype.reverse.call(true) instanceof Boolean,
  true,
  'The result of `(Array.prototype.reverse.call(true) instanceof Boolean)` is true'
);
assert.sameValue(
  Array.prototype.reverse.call(false) instanceof Boolean,
  true,
  'The result of `(Array.prototype.reverse.call(false) instanceof Boolean)` is true'
);
