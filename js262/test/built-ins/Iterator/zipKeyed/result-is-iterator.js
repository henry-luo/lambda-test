

/*---
esid: sec-iterator.zipkeyed
description: >
  The value of the [[Prototype]] internal slot of the return value of Iterator.zipKeyed
  is the intrinsic object %IteratorHelperPrototype%.
includes: [wellKnownIntrinsicObjects.js]
features: [joint-iteration]
---*/

var iter = Iterator.zipKeyed({});
assert(iter instanceof Iterator, "Iterator.zipKeyed({}) must return an Iterator");

assert.sameValue(
  Object.getPrototypeOf(iter),
  getWellKnownIntrinsicObject("%IteratorHelperPrototype%"),
  "[[Prototype]] is %IteratorHelperPrototype%"
);
