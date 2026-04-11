

/*---
esid: sec-properties-of-the-finalization-registry-constructor
description: >
  The prototype of FinalizationRegistry is Object.prototype
info: |
  The value of the [[Prototype]] internal slot of the FinalizationRegistry object is the
  intrinsic object %FunctionPrototype%.
features: [FinalizationRegistry]
---*/

assert.sameValue(
  Object.getPrototypeOf(FinalizationRegistry),
  Function.prototype,
  'Object.getPrototypeOf(FinalizationRegistry) returns the value of `Function.prototype`'
);
