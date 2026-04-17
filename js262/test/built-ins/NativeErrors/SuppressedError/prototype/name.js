

/*---
esid: sec-aggregate-error.prototype.name
description: >
  The `SuppressedError.prototype.name` property descriptor.
info: |
  The initial value of SuppressedError.prototype.name is "SuppressedError".

  17 ECMAScript Standard Built-in Objects:

  Every other data property described (...) has the attributes { [[Writable]]: true,
    [[Enumerable]]: false, [[Configurable]]: true } unless otherwise specified.
includes: [propertyHelper.js]
features: [explicit-resource-management]
---*/

verifyProperty(SuppressedError.prototype, 'name', {
  value: 'SuppressedError',
  enumerable: false,
  writable: true,
  configurable: true
});
