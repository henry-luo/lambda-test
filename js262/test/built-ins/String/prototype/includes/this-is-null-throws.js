

/*---
es6id: 21.1.3.7
description: >
  Throws TypeError when `this` is null
info: |
  21.1.3.7 String.prototype.includes ( searchString [ , position ] )

  1. Let O be RequireObjectCoercible(this value).
  2. Let S be ToString(O).
features: [String.prototype.includes]
---*/
assert.throws(TypeError, function() {
  String.prototype.includes.call(null, '');
});
