

/*---
esid: sec-get-disposablestack.prototype.disposed
description: >
  Property type and descriptor.
info: |
  get DisposableStack.prototype.disposed

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
features: [explicit-resource-management]
---*/

var descriptor = Object.getOwnPropertyDescriptor(DisposableStack.prototype, 'disposed');

assert.sameValue(
  typeof descriptor.get,
  'function',
  'typeof descriptor.get is function'
);
assert.sameValue(
  typeof descriptor.set,
  'undefined',
  'typeof descriptor.set is undefined'
);

verifyProperty(DisposableStack.prototype, 'disposed', {
  enumerable: false,
  configurable: true
});
