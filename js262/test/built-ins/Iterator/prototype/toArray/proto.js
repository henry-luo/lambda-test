

/*---
esid: sec-iteratorprototype.toArray
description: >
  The value of the [[Prototype]] internal slot of Iterator.prototype.toArray is the
  intrinsic object %Function%.
features: [iterator-helpers]
---*/

assert.sameValue(Object.getPrototypeOf(Iterator.prototype.toArray), Function.prototype);
