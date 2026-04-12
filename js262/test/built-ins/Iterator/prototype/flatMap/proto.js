

/*---
esid: sec-iteratorprototype.flatMap
description: >
  The value of the [[Prototype]] internal slot of Iterator.prototype.flatMap is the
  intrinsic object %FunctionPrototype%.
features: [iterator-helpers]
---*/

assert.sameValue(Object.getPrototypeOf(Iterator.prototype.flatMap), Function.prototype);
