

/*---
esid: sec-properties-of-the-asyncdisposablestack-prototype-object
description: AsyncDisposableStack.prototype.constructor
info: |
  The initial value of AsyncDisposableStack.prototype.constructor is the intrinsic object %AsyncDisposableStack%.

  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
features: [explicit-resource-management]
---*/

verifyProperty(AsyncDisposableStack.prototype, 'constructor', {
  value: AsyncDisposableStack,
  writable: true,
  enumerable: false,
  configurable: true
});
