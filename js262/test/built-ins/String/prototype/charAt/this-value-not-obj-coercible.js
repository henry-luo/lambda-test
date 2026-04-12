

/*---
esid: sec-string.prototype.charat
description: The "this" value must be object-coercible
info: |
  1. Let O be ? RequireObjectCoercible(this value).
---*/

var charAt = String.prototype.charAt;

assert.sameValue(typeof charAt, 'function');

assert.throws(TypeError, function() {
  charAt.call(undefined, 0);
}, 'undefined');

assert.throws(TypeError, function() {
  charAt.call(null, 0);
}, 'null');
