

/*---
esid: sec-string.prototype.lastindexof
description: The "this" value must be object-coercible
info: |
  1. Let O be ? RequireObjectCoercible(this value).
---*/

var lastIndexOf = String.prototype.lastIndexOf;

assert.sameValue(typeof lastIndexOf, 'function');

assert.throws(TypeError, function() {
  lastIndexOf.call(undefined, '');
}, 'undefined');

assert.throws(TypeError, function() {
  lastIndexOf.call(null, '');
}, 'null');
