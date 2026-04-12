

/*---
esid: sec-iteratorprototype.filter
description: >
  The value of the [[Prototype]] internal slot of Iterator.prototype.filter is the
  intrinsic object %FunctionPrototype%.
features: [iterator-helpers]
---*/

assert.sameValue(Object.getPrototypeOf(Iterator.prototype.filter), Function.prototype);
