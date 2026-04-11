

/*---
esid: sec-properties-of-asyncdisposablestack-constructor
description: >
  The prototype of AsyncDisposableStack is Function.prototype
info: |
  The value of the [[Prototype]] internal slot of the AsyncDisposableStack object is the
  intrinsic object %FunctionPrototype%.
features: [explicit-resource-management]
---*/

assert.sameValue(
  Object.getPrototypeOf(AsyncDisposableStack),
  Function.prototype,
  'Object.getPrototypeOf(AsyncDisposableStack) returns the value of `Function.prototype`'
);
