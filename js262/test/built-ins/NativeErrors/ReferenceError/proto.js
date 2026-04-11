

/*---
es6id: 19.5.6.2
description: >
  The prototype of ReferenceError is Error.
info: |
  The value of the [[Prototype]] internal slot of a NativeError constructor is the intrinsic object %Error% (19.5.1).
---*/

assert.sameValue(Object.getPrototypeOf(ReferenceError), Error);
