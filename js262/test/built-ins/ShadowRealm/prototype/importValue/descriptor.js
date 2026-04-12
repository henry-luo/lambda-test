

/*---
esid: sec-shadowrealm.prototype.importvalue
description: >
  ShadowRealm.prototype.importValue is an ECMAScript Standard built-in object function.
includes: [propertyHelper.js]
features: [ShadowRealm]
---*/

verifyProperty(ShadowRealm.prototype, "importValue", {
  enumerable: false,
  writable: true,
  configurable: true,
});
