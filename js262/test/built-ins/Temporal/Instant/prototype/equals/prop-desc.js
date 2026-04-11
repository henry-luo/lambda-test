

/*---
esid: sec-temporal.instant.prototype.equals
description: The "equals" property of Temporal.Instant.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.Instant.prototype.equals,
  "function",
  "`typeof Instant.prototype.equals` is `function`"
);

verifyProperty(Temporal.Instant.prototype, "equals", {
  writable: true,
  enumerable: false,
  configurable: true,
});
