

/*---
esid: sec-shadowrealm-constructor
description: >
  The ShadowRealm constructor is the initial value of the "ShadowRealm" property of the global object.
includes: [propertyHelper.js]
features: [ShadowRealm]
---*/

verifyProperty(this, "ShadowRealm", {
  enumerable: false,
  writable: true,
  configurable: true,
});
