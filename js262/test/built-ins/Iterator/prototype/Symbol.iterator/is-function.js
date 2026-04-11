

/*---
esid: sec-iteratorprototype.some
description: >
  Iterator.prototype.some is a built-in function
features: [Symbol.iterator]
---*/
const IteratorPrototype = Object.getPrototypeOf(
  Object.getPrototypeOf([][Symbol.iterator]())
);

assert.sameValue(typeof IteratorPrototype[Symbol.iterator], 'function');
