

/*---
esid: sec-array.prototype.findlastindex
description: >
  Return abrupt from ToObject(this value).
info: |
  Array.prototype.findLastIndex ( predicate[ , thisArg ] )

  1. Let O be ? ToObject(this value).
features: [array-find-from-last]
---*/


assert.throws(TypeError, function() {
  Array.prototype.findLastIndex.call(undefined, function() {});
});

assert.throws(TypeError, function() {
  Array.prototype.findLastIndex.call(null, function() {});
});
