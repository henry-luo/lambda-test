

/*---
esid: sec-array.prototype.find
description: >
  Return abrupt from ToObject(this value).
info: |
  22.1.3.8 Array.prototype.find ( predicate[ , thisArg ] )

  1. Let O be ToObject(this value).
  2. ReturnIfAbrupt(O).
---*/


assert.throws(TypeError, function() {
  Array.prototype.find.call(undefined, function() {});
});

assert.throws(TypeError, function() {
  Array.prototype.find.call(null, function() {});
});
