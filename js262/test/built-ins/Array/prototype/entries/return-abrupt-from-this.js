

/*---
esid: sec-array.prototype.entries
description: >
  Return abrupt from ToObject(this value).
info: |
  22.1.3.4 Array.prototype.entries ( )

  1. Let O be ToObject(this value).
  2. ReturnIfAbrupt(O).
---*/

assert.throws(TypeError, function() {
  Array.prototype.entries.call(undefined);
});

assert.throws(TypeError, function() {
  Array.prototype.entries.call(null);
});
