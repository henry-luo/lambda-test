

/*---
esid: sec-string.prototype.localecompare
description: The "this" value must be object-coercible
info: |
  1. Let O be ? RequireObjectCoercible(this value).
---*/

var localeCompare = String.prototype.localeCompare;

assert.sameValue(typeof localeCompare, 'function');

assert.throws(TypeError, function() {
  localeCompare.call(undefined, '');
}, 'undefined');

assert.throws(TypeError, function() {
  localeCompare.call(null, '');
}, 'null');
