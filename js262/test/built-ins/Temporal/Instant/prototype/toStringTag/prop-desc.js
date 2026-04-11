

/*---
esid: sec-temporal.instant.prototype-@@tostringtag
description: The @@toStringTag property of Temporal.Instant
includes: [propertyHelper.js]
features: [Temporal]
---*/

verifyProperty(Temporal.Instant.prototype, Symbol.toStringTag, {
  value: "Temporal.Instant",
  writable: false,
  enumerable: false,
  configurable: true,
});
