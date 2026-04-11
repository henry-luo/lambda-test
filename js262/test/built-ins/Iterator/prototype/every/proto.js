

/*---
esid: sec-iteratorprototype.every
description: >
  The value of the [[Prototype]] internal slot of Iterator.prototype.every is the
  intrinsic object %Function%.
features: [iterator-helpers]
---*/

assert.sameValue(Object.getPrototypeOf(Iterator.prototype.every), Function.prototype);
