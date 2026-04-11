

/*---
esid: sec-string.prototype.charcodeat
description: The "this" value must be object-coercible
info: |
  1. Let O be ? RequireObjectCoercible(this value).
---*/

var charCodeAt = String.prototype.charCodeAt;

assert.sameValue(typeof charCodeAt, 'function');

assert.throws(TypeError, function() {
  charCodeAt.call(undefined, 0);
}, 'undefined');

assert.throws(TypeError, function() {
  charCodeAt.call(null, 0);
}, 'null');
