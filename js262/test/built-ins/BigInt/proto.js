

/*---
description: The prototype of BigInt constructor is Function.prototype
esid: sec-properties-of-the-bigint-constructor
info: |
  The value of the [[Prototype]] internal slot of the BigInt constructor is the
  intrinsic object %FunctionPrototype%.
features: [BigInt]
---*/

var proto = Object.getPrototypeOf(BigInt);

assert.sameValue(proto, Function.prototype);
