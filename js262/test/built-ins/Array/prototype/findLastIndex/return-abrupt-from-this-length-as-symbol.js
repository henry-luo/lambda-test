

/*---
esid: sec-array.prototype.findlastindex
description: >
  Return abrupt from ToLength(Get(O, "length")) where length is a Symbol.
info: |
  Array.prototype.findLastIndex ( predicate[ , thisArg ] )

  1. Let O be ? ToObject(this value).
  2. Let len be ? LengthOfArrayLike(O).
  ...
features: [Symbol, array-find-from-last]
---*/

var o = {};

o.length = Symbol(1);


assert.throws(TypeError, function() {
  [].findLastIndex.call(o, function() {});
});
