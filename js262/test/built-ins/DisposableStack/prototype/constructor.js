

/*---
esid: sec-properties-of-the-disposablestack-prototype-object
description: DisposableStack.prototype.constructor
info: |
  The initial value of DisposableStack.prototype.constructor is the intrinsic object %DisposableStack%.

  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
features: [explicit-resource-management]
---*/

verifyProperty(DisposableStack.prototype, 'constructor', {
  value: DisposableStack,
  writable: true,
  enumerable: false,
  configurable: true
});
