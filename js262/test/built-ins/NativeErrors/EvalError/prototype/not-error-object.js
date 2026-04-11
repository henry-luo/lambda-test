

/*---
es6id: 19.5.6.3
description: >
  EvalError.prototype is not an error object instance.
info: |
  Each NativeError prototype object is an ordinary object. It is not an
  Error instance and does not have an [[ErrorData]] internal slot.
---*/

assert.sameValue(Object.prototype.toString.call(EvalError.prototype), "[object Object]");
