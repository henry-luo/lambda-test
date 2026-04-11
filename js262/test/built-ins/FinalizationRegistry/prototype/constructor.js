

/*---
esid: sec-finalization-registry.prototype.constructor
description: FinalizationRegistry.prototype.constructor property descriptor
info: |
  FinalizationRegistry.prototype.constructor

  The initial value of FinalizationRegistry.prototype.constructor is the intrinsic
  object %FinalizationRegistry%.

  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
features: [FinalizationRegistry]
---*/

verifyProperty(FinalizationRegistry.prototype, 'constructor', {
  value: FinalizationRegistry,
  writable: true,
  enumerable: false,
  configurable: true
});
