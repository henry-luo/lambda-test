

/*---
esid: sec-array.prototype.copyWithin
description: Array.prototype.copyWithin applied to boolean primitive
---*/

assert.sameValue(
  Array.prototype.copyWithin.call(true) instanceof Boolean,
  true,
  'The result of evaluating (Array.prototype.copyWithin.call(true) instanceof Boolean) is expected to be true'
);
assert.sameValue(
  Array.prototype.copyWithin.call(false) instanceof Boolean,
  true,
  'The result of evaluating (Array.prototype.copyWithin.call(false) instanceof Boolean) is expected to be true'
);
