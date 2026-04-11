

/*---
es6id: 21.1.3.12
description: >
  Throws TypeError when `this` is null
info: |
  21.1.3.12 String.prototype.normalize ( [ form ] )

  1. Let O be RequireObjectCoercible(this value).
  2. Let S be ToString(O).
---*/

assert.throws(TypeError, function() {
  String.prototype.normalize.call(null);
});
