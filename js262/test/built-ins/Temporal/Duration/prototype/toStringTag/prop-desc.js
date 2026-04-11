

/*---
esid: sec-temporal.duration.prototype-@@tostringtag
description: The @@toStringTag property of Temporal.Duration
includes: [propertyHelper.js]
features: [Temporal]
---*/

verifyProperty(Temporal.Duration.prototype, Symbol.toStringTag, {
  value: "Temporal.Duration",
  writable: false,
  enumerable: false,
  configurable: true,
});
