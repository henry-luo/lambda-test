

/*---
es6id: 19.5.6.3
description: >
  The prototype of TypeError.prototype is Error.prototype.
info: |
  The value of the [[Prototype]] internal slot of each NativeError prototype
  object is the intrinsic object %ErrorPrototype% (19.5.3).
---*/

assert.sameValue(Object.getPrototypeOf(TypeError.prototype), Error.prototype);
