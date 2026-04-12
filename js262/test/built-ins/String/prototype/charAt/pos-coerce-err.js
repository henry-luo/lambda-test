

/*---
esid: sec-string.prototype.charat
description: Error when attempting to coerce providec "pos" to a Number
info: |
  [...]
  3. Let position be ? ToInteger(pos).
  [...]

  7.1.4 ToInteger

  1. Let number be ? ToNumber(argument).
---*/

var noCoerce = Object.create(null);

assert.throws(TypeError, function() {
  ''.charAt(noCoerce);
});
