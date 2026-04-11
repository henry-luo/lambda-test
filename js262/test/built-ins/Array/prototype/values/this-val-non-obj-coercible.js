

/*---
esid: sec-array.prototype.values
description: >
    `this` value not object coercible
info: |
    1. Let O be ToObject(this value).
    2. ReturnIfAbrupt(O).
---*/

assert.throws(TypeError, function() {
  Array.prototype.values.call(undefined);
});

assert.throws(TypeError, function() {
  Array.prototype.values.call(null);
});
