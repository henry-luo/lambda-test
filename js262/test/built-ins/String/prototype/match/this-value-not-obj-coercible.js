

/*---
esid: sec-string.prototype.match
description: The "this" value must be object-coercible
info: |
  1. Let O be ? RequireObjectCoercible(this value).
---*/

var match = String.prototype.match;

assert.sameValue(typeof match, 'function');

assert.throws(TypeError, function() {
  match.call(undefined, /./);
}, 'undefined');

assert.throws(TypeError, function() {
  match.call(null, /./);
}, 'null');
