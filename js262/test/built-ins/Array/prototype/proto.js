

/*---
esid: sec-properties-of-the-array-prototype-object
description: >
  The [[Prototype]] of Array.prototype is Object.Prototype.
info: |
  22.1.3 Properties of the Array Prototype Object

  The value of the [[Prototype]] internal slot of the Array prototype object is
  the intrinsic object %ObjectPrototype%.
---*/

assert.sameValue(Object.getPrototypeOf(Array.prototype), Object.prototype);
