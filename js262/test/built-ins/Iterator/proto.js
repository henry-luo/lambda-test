

/*---
esid: sec-properties-of-the-iterator-constructor
description: >
  The value of the [[Prototype]] internal slot of the Iterator constructor is the
  intrinsic object %FunctionPrototype%.
features: [iterator-helpers]
---*/

assert.sameValue(
  Object.getPrototypeOf(Iterator),
  Function.prototype,
  'Object.getPrototypeOf(Iterator) must return the value of Function.prototype'
);
