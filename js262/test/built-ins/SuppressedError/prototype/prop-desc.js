

/*---
esid: sec-aggregate-error.prototype
description: >
  Property descriptor of SuppressedError.prototype
info: |
  SuppressedError.prototype

  The initial value of SuppressedError.prototype is the intrinsic object %AggregateErrorPrototype%.

  This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: false }.
includes: [propertyHelper.js]
features: [explicit-resource-management]
---*/

assert.sameValue(typeof SuppressedError.prototype, 'object');

verifyProperty(SuppressedError, 'prototype', {
  enumerable: false,
  writable: false,
  configurable: false
});
