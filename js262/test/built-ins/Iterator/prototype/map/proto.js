

/*---
esid: sec-iteratorprototype.map
description: >
  The value of the [[Prototype]] internal slot of Iterator.prototype.map is the
  intrinsic object %FunctionPrototype%.
features: [iterator-helpers]
---*/

assert.sameValue(Object.getPrototypeOf(Iterator.prototype.map), Function.prototype);
