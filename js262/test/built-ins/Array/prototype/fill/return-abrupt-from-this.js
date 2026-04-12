

/*---
esid: sec-array.prototype.fill
description: >
  Return abrupt from ToObject(this value).
info: |
  22.1.3.6 Array.prototype.fill (value [ , start [ , end ] ] )

  1. Let O be ToObject(this value).
  2. ReturnIfAbrupt(O).
---*/

assert.throws(TypeError, function() {
  Array.prototype.fill.call(undefined, 1);
});

assert.throws(TypeError, function() {
  Array.prototype.fill.call(null, 1);
});
