

/*---
es6id: 21.1.3.13
description: >
  Throws TypeError when `this` is null
info: |
  21.1.3.13 String.prototype.repeat ( count )

  1. Let O be RequireObjectCoercible(this value).
  2. Let S be ToString(O).
---*/

assert.throws(TypeError, function() {
  String.prototype.repeat.call(null);
});
