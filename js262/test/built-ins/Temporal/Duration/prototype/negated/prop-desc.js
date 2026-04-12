

/*---
esid: sec-temporal.duration.prototype.negated
description: The "negated" property of Temporal.Duration.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.Duration.prototype.negated,
  "function",
  "`typeof Duration.prototype.negated` is `function`"
);

verifyProperty(Temporal.Duration.prototype, "negated", {
  writable: true,
  enumerable: false,
  configurable: true,
});
