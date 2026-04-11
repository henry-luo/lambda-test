

/*---
es6id: 19.5.6.3
description: >
  TypeError.prototype is not an error object instance.
info: |
  Each NativeError prototype object is an ordinary object. It is not an
  Error instance and does not have an [[ErrorData]] internal slot.
---*/

assert.sameValue(Object.prototype.toString.call(TypeError.prototype), "[object Object]");
