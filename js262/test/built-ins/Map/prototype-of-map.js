

/*---
es6id: 23.1.2
description: >
  The prototype of Map is the intrinsic FunctionPrototype.
info: |
  The value of the [[Prototype]] internal slot of the Map constructor is the
  intrinsic object %FunctionPrototype% (19.2.3).
---*/

assert.sameValue(
  Object.getPrototypeOf(Map),
  Function.prototype,
  '`Object.getPrototypeOf(Map)` returns `Function.prototype`'
);
