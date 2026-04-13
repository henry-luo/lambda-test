

/*---
esid: sec-aggregate-error.prototype.message
description: >
  The `SuppressedError.prototype.message` property descriptor.
info: |
  The initial value of the message property of the prototype for a given SuppressedError
  constructor is the empty String.

  17 ECMAScript Standard Built-in Objects:

  Every other data property described (...) has the attributes { [[Writable]]: true,
    [[Enumerable]]: false, [[Configurable]]: true } unless otherwise specified.
includes: [propertyHelper.js]
features: [explicit-resource-management]
---*/

verifyProperty(SuppressedError.prototype, 'message', {
  value: '',
  enumerable: false,
  writable: true,
  configurable: true
});
