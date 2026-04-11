

/*---
esid: sec-temporal-objects
includes: [propertyHelper.js]
description: The "Temporal" property of the global object
features: [Temporal]
---*/

assert.sameValue(typeof Temporal, "object");
verifyProperty(this, "Temporal", {
  writable: true,
  enumerable: false,
  configurable: true,
});
