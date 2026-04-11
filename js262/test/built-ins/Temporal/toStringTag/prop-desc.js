

/*---
esid: sec-temporal-@@tostringtag
description: The @@toStringTag property of Temporal
includes: [propertyHelper.js]
features: [Symbol.toStringTag, Temporal]
---*/

verifyProperty(Temporal, Symbol.toStringTag, {
  value: "Temporal",
  writable: false,
  enumerable: false,
  configurable: true,
});
