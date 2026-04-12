

/*---
esid: sec-%iteratorprototype%-@@dispose
description: >
  Iterator.prototype[@@dispose] is a built-in function
features: [explicit-resource-management]
---*/
const IteratorPrototype = Object.getPrototypeOf(
  Object.getPrototypeOf([][Symbol.iterator]())
);

assert.sameValue(typeof IteratorPrototype[Symbol.dispose], 'function');
