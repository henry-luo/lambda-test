

/*---
esid: sec-temporal.instant.prototype.round
description: The "round" property of Temporal.Instant.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.Instant.prototype.round,
  "function",
  "`typeof Instant.prototype.round` is `function`"
);

verifyProperty(Temporal.Instant.prototype, "round", {
  writable: true,
  enumerable: false,
  configurable: true,
});
