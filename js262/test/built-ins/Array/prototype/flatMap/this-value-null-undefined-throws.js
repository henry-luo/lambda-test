

/*---
esid: sec-array.prototype.flatMap
description: >
  Throw a TypeError if this value is null or undefined
info: |
  Array.prototype.flatMap ( mapperFunction [ , thisArg ] )

  1. Let O be ? ToObject(this value).
  ...
features: [Array.prototype.flatMap]
---*/

assert.sameValue(typeof Array.prototype.flatMap, 'function');

var mapperFn = function() {};

assert.throws(TypeError, function() {
  [].flatMap.call(null, mapperFn);
}, 'null value');

assert.throws(TypeError, function() {
  [].flatMap.call(undefined, mapperFn);
}, 'undefined');
