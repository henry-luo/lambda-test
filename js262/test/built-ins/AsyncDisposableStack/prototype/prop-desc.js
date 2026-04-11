

/*---
description: The property descriptor AsyncDisposableStack.prototype
esid: sec-properties-of-the-asyncdisposablestack-constructor
info: |
  This property has the attributes { [[Writable]]: false, [[Enumerable]]: false,
  [[Configurable]]: false }.
features: [explicit-resource-management]
includes: [propertyHelper.js]
---*/

verifyProperty(AsyncDisposableStack, 'prototype', {
  writable: false,
  enumerable: false,
  configurable: false
});
