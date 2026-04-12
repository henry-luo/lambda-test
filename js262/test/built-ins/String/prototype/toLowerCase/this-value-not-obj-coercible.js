

/*---
esid: sec-string.prototype.tolowercase
description: The "this" value must be object-coercible
info: |
  1. Let O be ? RequireObjectCoercible(this value).
---*/

var toLowerCase = String.prototype.toLowerCase;

assert.sameValue(typeof toLowerCase, 'function');

assert.throws(TypeError, function() {
  toLowerCase.call(undefined);
}, 'undefined');

assert.throws(TypeError, function() {
  toLowerCase.call(null);
}, 'null');
