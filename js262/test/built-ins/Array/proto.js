

/*---
esid: sec-properties-of-the-array-constructor
description: >
  The prototype of the Array constructor is the intrinsic object %FunctionPrototype%.
info: |
  22.1.2 Properties of the Array Constructor

  The value of the [[Prototype]] internal slot of the Array constructor is the
  intrinsic object %FunctionPrototype%.
---*/

assert.sameValue(
  Object.getPrototypeOf(Array),
  Function.prototype,
  'Object.getPrototypeOf(Array) returns Function.prototype'
);
