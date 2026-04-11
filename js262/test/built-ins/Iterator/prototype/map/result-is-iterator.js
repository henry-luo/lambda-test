

/*---
esid: sec-iteratorprototype.map
description: >
  The value of the [[Prototype]] internal slot of the return value of Iterator.prototype.map is the
  intrinsic object %IteratorHelperPrototype%.
features: [iterator-helpers]
---*/

assert((function* () {})().map(() => 0) instanceof Iterator, 'function*(){}().map(() => 0) must return an Iterator');
