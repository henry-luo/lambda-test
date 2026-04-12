

/*---
esid: sec-iteratorprototype.forEach
description: >
  The value of the [[Prototype]] internal slot of Iterator.prototype.forEach is the
  intrinsic object %Function%.
features: [iterator-helpers]
---*/

assert.sameValue(Object.getPrototypeOf(Iterator.prototype.forEach), Function.prototype);
