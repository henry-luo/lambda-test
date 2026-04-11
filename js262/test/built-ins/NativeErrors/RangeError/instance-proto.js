

/*---
es6id: 19.5.6.4
description: >
  The prototype of RangeError instances is RangeError.prototype.
info: |
  NativeError instances are ordinary objects that inherit properties
  from their NativeError prototype object and have an [[ErrorData]]
  internal slot whose value is undefined
---*/

assert.sameValue(Object.getPrototypeOf(new RangeError), RangeError.prototype);
