

/*---
esid: sec-%asynciteratorprototype%-@@asyncDispose
description: >
  AsyncIterator.prototype[@@asyncDispose] is a built-in function
features: [explicit-resource-management]
---*/

async function* generator() {}
const AsyncIteratorPrototype = Object.getPrototypeOf(Object.getPrototypeOf(generator.prototype))

assert.sameValue(typeof AsyncIteratorPrototype[Symbol.asyncDispose], 'function');
