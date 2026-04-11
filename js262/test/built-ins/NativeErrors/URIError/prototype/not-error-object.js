

/*---
es6id: 19.5.6.3
description: >
  URIError.prototype is not an error object instance.
info: |
  Each NativeError prototype object is an ordinary object. It is not an
  Error instance and does not have an [[ErrorData]] internal slot.
---*/

assert.sameValue(Object.prototype.toString.call(URIError.prototype), "[object Object]");
