

/*---
esid: sec-iteratorprototype.drop
description: >
  The value of the [[Prototype]] internal slot of Iterator.prototype.drop is the
  intrinsic object %FunctionPrototype%.
features: [iterator-helpers]
---*/

assert.sameValue(Object.getPrototypeOf(Iterator.prototype.drop), Function.prototype);
