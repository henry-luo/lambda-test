

/*---
esid: pending
description: The `this` value cannot be coerced into an object
info: |
  String.prototype.matchAll ( regexp )
    1. Let O be RequireObjectCoercible(this value).
features: [String.prototype.matchAll]
---*/

var matchAll = String.prototype.matchAll;

assert.sameValue(typeof matchAll, 'function');

assert.throws(TypeError, function() {
  matchAll.call(undefined);
}, 'undefined');

assert.throws(TypeError, function() {
  matchAll.call(null);
}, 'null');
