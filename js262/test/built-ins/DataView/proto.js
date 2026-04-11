

/*---
esid: sec-properties-of-the-dataview-constructor
description: >
  The prototype of DataView is Function.prototype
info: |
  The value of the [[Prototype]] internal slot of the DataView constructor is
  the intrinsic object %FunctionPrototype%.
---*/

assert.sameValue(Object.getPrototypeOf(DataView), Function.prototype);
