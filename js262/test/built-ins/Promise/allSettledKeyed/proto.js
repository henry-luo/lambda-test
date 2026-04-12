

/*---
esid: sec-promise.allsettledkeyed
description: >
  The value of the [[Prototype]] internal slot of Promise.allSettledKeyed is the
  intrinsic object %FunctionPrototype%.
features: [await-dictionary]
---*/

assert.sameValue(
  Object.getPrototypeOf(Promise.allSettledKeyed),
  Function.prototype,
  "Object.getPrototypeOf(Promise.allSettledKeyed) must return the value of Function.prototype"
);
