

/*---
es6id: 19.5.6.4
description: >
  EvalError instances have an [[ErrorData]] internal slot.
info: |
  NativeError instances are ordinary objects that inherit properties
  from their NativeError prototype object and have an [[ErrorData]]
  internal slot whose value is undefined
---*/

assert.sameValue(Object.prototype.toString.call(new EvalError), "[object Error]");
