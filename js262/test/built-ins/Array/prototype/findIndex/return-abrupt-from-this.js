

/*---
esid: sec-array.prototype.findindex
description: >
  Return abrupt from ToObject(this value).
info: |
  22.1.3.9 Array.prototype.findIndex ( predicate[ , thisArg ] )

  1. Let O be ToObject(this value).
  2. ReturnIfAbrupt(O).
---*/


assert.throws(TypeError, function() {
  Array.prototype.findIndex.call(undefined, function() {});
});

assert.throws(TypeError, function() {
  Array.prototype.findIndex.call(null, function() {});
});
