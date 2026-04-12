

/*---
esid: sec-string.prototype.indexof
description: The "this" value must be object-coercible
info: |
  1. Let O be ? RequireObjectCoercible(this value).
---*/

var indexOf = String.prototype.indexOf;

assert.sameValue(typeof indexOf, 'function');

assert.throws(TypeError, function() {
  indexOf.call(undefined, '');
}, 'undefined');

assert.throws(TypeError, function() {
  indexOf.call(null, '');
}, 'null');
