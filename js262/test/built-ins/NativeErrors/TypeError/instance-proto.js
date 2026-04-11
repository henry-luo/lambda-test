

/*---
es6id: 19.5.6.4
description: >
  The prototype of TypeError instances is TypeError.prototype.
info: |
  NativeError instances are ordinary objects that inherit properties
  from their NativeError prototype object and have an [[ErrorData]]
  internal slot whose value is undefined
---*/

assert.sameValue(Object.getPrototypeOf(new TypeError), TypeError.prototype);
