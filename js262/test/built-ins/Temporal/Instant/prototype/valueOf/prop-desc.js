

/*---
esid: sec-temporal.instant.prototype.valueof
description: The "valueOf" property of Temporal.Instant.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.Instant.prototype.valueOf,
  "function",
  "`typeof Instant.prototype.valueOf` is `function`"
);

verifyProperty(Temporal.Instant.prototype, "valueOf", {
  writable: true,
  enumerable: false,
  configurable: true,
});
