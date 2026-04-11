

/*---
esid: sec-properties-of-weakmap-instances
description: >
  WeakMap instances are ordinary objects that inherit properties from the
  WeakMap prototype.
---*/

assert.sameValue(
  Object.getPrototypeOf(new WeakMap()),
  WeakMap.prototype,
  '`Object.getPrototypeOf(new WeakMap())` returns `WeakMap.prototype`'
);
