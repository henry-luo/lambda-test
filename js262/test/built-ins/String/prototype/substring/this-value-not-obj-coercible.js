

/*---
esid: sec-string.prototype.substring
description: The "this" value must be object-coercible
info: |
  1. Let O be ? RequireObjectCoercible(this value).
---*/

var substring = String.prototype.substring;

assert.sameValue(typeof substring, 'function');

assert.throws(TypeError, function() {
  substring.call(undefined, 0, 1);
}, 'undefined');

assert.throws(TypeError, function() {
  substring.call(null, 0, 1);
}, 'null');
