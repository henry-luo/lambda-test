

/*---
esid: sec-iteratorprototype.filter
description: >
  The value of the [[Prototype]] internal slot of the return value of Iterator.prototype.filter is the
  intrinsic object %IteratorHelperPrototype%.
features: [iterator-helpers]
---*/

assert(
  (function* () {})().filter(() => true) instanceof Iterator,
  'function*(){}().filter(() => true) must return an Iterator'
);
