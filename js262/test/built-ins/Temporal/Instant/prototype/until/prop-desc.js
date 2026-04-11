

/*---
esid: sec-temporal.instant.prototype.until
description: The "until" property of Temporal.Instant.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.Instant.prototype.until,
  "function",
  "`typeof Instant.prototype.until` is `function`"
);

verifyProperty(Temporal.Instant.prototype, "until", {
  writable: true,
  enumerable: false,
  configurable: true,
});
