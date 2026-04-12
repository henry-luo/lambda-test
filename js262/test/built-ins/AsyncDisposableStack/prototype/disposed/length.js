

/*---
esid: sec-get-asyncdisposablestack.prototype.disposed
description: >
  AsyncDisposableStack.prototype.disposed.length value and descriptor.
info: |
  get AsyncDisposableStack.prototype.disposed

  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
features: [explicit-resource-management]
---*/

var descriptor = Object.getOwnPropertyDescriptor(AsyncDisposableStack.prototype, 'disposed');

verifyProperty(descriptor.get, 'length', {
  value: 0,
  enumerable: false,
  writable: false,
  configurable: true
});
