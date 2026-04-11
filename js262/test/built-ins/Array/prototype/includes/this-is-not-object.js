

/*---
esid: sec-array.prototype.includes
description: >
  Throws a TypeError exception when `this` cannot be coerced to Object
info: |
  22.1.3.11 Array.prototype.includes ( searchElement [ , fromIndex ] )

  1. Let O be ? ToObject(this value).
  ...
features: [Array.prototype.includes]
---*/

var includes = Array.prototype.includes;

assert.throws(TypeError, function() {
  includes.call(undefined, 42);
}, "this is undefined");

assert.throws(TypeError, function() {
  includes.call(null, 42);
}, "this is null");
