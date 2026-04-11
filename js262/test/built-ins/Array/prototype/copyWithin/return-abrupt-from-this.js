

/*---
esid: sec-array.prototype.copywithin
description: >
  Return abrupt from ToObject(this value).
info: |
  22.1.3.3 Array.prototype.copyWithin (target, start [ , end ] )

  1. Let O be ToObject(this value).
  2. ReturnIfAbrupt(O).
---*/

assert.throws(TypeError, function() {
  Array.prototype.copyWithin.call(undefined, 0, 0);
});

assert.throws(TypeError, function() {
  Array.prototype.copyWithin.call(null, 0, 0);
});
