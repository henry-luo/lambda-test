

/*---
description: The property descriptor FinalizationRegistry.prototype
esid: sec-finalization-registry.prototype
info: |
  This property has the attributes { [[Writable]]: false, [[Enumerable]]: false,
  [[Configurable]]: false }.
features: [FinalizationRegistry]
includes: [propertyHelper.js]
---*/

verifyProperty(FinalizationRegistry, 'prototype', {
  writable: false,
  enumerable: false,
  configurable: false
});
