

/*---
esid: sec-iteratorprototype.find
description: >
  The value of the [[Prototype]] internal slot of Iterator.prototype.find is the
  intrinsic object %Function%.
features: [iterator-helpers]
---*/

assert.sameValue(Object.getPrototypeOf(Iterator.prototype.find), Function.prototype);
