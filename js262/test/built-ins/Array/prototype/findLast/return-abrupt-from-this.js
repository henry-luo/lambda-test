

/*---
esid: sec-array.prototype.findlast
description: >
  Return abrupt from ToObject(this value).
info: |
  Array.prototype.findLast ( predicate[ , thisArg ] )

  1. Let O be ? ToObject(this value).
features: [array-find-from-last]
---*/


assert.throws(TypeError, function() {
  Array.prototype.findLast.call(undefined, function() {});
});

assert.throws(TypeError, function() {
  Array.prototype.findLast.call(null, function() {});
});
