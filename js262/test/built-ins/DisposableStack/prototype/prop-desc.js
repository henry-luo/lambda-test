

/*---
description: The property descriptor DisposableStack.prototype
esid: sec-properties-of-the-disposablestack-constructor
info: |
  This property has the attributes { [[Writable]]: false, [[Enumerable]]: false,
  [[Configurable]]: false }.
features: [explicit-resource-management]
includes: [propertyHelper.js]
---*/

verifyProperty(DisposableStack, 'prototype', {
  writable: false,
  enumerable: false,
  configurable: false
});
