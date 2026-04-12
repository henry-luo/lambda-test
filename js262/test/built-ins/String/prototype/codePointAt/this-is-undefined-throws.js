

/*---
es6id: 21.1.3.3
description: >
  Throws TypeError when `this` is undefined
info: |
  21.1.3.3 String.prototype.codePointAt ( pos )

  1. Let O be RequireObjectCoercible(this value).
  2. Let S be ToString(O).
---*/

assert.throws(TypeError, function() {
  String.prototype.codePointAt.call(undefined, 1);
});
