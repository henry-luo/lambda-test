

/*---
esid: sec-string.prototype.replace
description: The "this" value must be object-coercible
info: |
  1. Let O be ? RequireObjectCoercible(this value).
---*/

var replace = String.prototype.replace;

assert.sameValue(typeof replace, 'function');

assert.throws(TypeError, function() {
  replace.call(undefined, '', '');
}, 'undefined');

assert.throws(TypeError, function() {
  replace.call(null, '', '');
}, 'null');
