

/*---
esid: sec-temporal-now-@@tostringtag
description: The @@toStringTag property of Temporal.Now
includes: [propertyHelper.js]
features: [Symbol.toStringTag, Temporal]
---*/

verifyProperty(Temporal.Now, Symbol.toStringTag, {
  value: "Temporal.Now",
  writable: false,
  enumerable: false,
  configurable: true,
});
