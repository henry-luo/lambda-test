

/*---
esid: sec-array.prototype.findindex
description: >
  Return abrupt from ToLength(Get(O, "length")) where length is a Symbol.
info: |
  22.1.3.9 Array.prototype.findIndex ( predicate[ , thisArg ] )

  1. Let O be ToObject(this value).
  2. ReturnIfAbrupt(O).
  3. Let len be ToLength(Get(O, "length")).
  4. ReturnIfAbrupt(len).
  ...
features: [Symbol]
---*/

var o = {};

o.length = Symbol(1);


assert.throws(TypeError, function() {
  [].findIndex.call(o, function() {});
});
