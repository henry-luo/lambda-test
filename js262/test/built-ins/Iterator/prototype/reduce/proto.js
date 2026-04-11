

/*---
esid: sec-iteratorprototype.reduce
description: >
  The value of the [[Prototype]] internal slot of Iterator.prototype.reduce is the
  intrinsic object %Function%.
features: [iterator-helpers]
---*/

assert.sameValue(Object.getPrototypeOf(Iterator.prototype.reduce), Function.prototype);
