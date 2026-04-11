

/*---
esid: sec-properties-of-the-weakset-constructor
description: >
  The value of the [[Prototype]] internal slot of the WeakSet constructor
  is the intrinsic object %FunctionPrototype% (19.2.3).
---*/

assert.sameValue(
  Object.getPrototypeOf(WeakSet),
  Function.prototype,
  '`Object.getPrototypeOf(WeakSet)` returns `Function.prototype`'
);
