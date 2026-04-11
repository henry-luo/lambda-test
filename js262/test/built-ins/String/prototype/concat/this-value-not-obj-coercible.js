

/*---
esid: sec-string.prototype.concat
description: The "this" value must be object-coercible
info: |
  1. Let O be ? RequireObjectCoercible(this value).
---*/

var concat = String.prototype.concat;

assert.sameValue(typeof concat, 'function');

assert.throws(TypeError, function() {
  concat.call(undefined, '');
}, 'undefined');

assert.throws(TypeError, function() {
  concat.call(null, '');
}, 'null');
