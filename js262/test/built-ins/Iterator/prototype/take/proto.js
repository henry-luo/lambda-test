

/*---
esid: sec-iteratorprototype.take
description: >
  The value of the [[Prototype]] internal slot of Iterator.prototype.take is the
  intrinsic object %FunctionPrototype%.
features: [iterator-helpers]
---*/

assert.sameValue(Object.getPrototypeOf(Iterator.prototype.take), Function.prototype);
