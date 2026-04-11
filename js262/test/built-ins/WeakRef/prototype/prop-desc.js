

/*---
description: The property descriptor WeakRef.prototype
esid: sec-weak-ref.prototype
info: |
  This property has the attributes { [[Writable]]: false, [[Enumerable]]: false,
  [[Configurable]]: false }.
features: [WeakRef]
includes: [propertyHelper.js]
---*/

verifyProperty(WeakRef, 'prototype', {
  writable: false,
  enumerable: false,
  configurable: false
});
