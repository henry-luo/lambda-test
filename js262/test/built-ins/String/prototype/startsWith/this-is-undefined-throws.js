

/*---
es6id: 21.1.3.18
description: >
  Throws TypeError when `this` is undefined
info: |
  21.1.3.18 String.prototype.startsWith ( searchString [ , position ] )

  1. Let O be RequireObjectCoercible(this value).
  2. Let S be ToString(O).
---*/

assert.throws(TypeError, function() {
  String.prototype.startsWith.call(undefined, '');
});
