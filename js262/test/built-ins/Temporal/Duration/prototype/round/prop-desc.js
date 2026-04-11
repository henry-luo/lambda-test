

/*---
esid: sec-temporal.duration.prototype.round
description: The "round" property of Temporal.Duration.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.Duration.prototype.round,
  "function",
  "`typeof Duration.prototype.round` is `function`"
);

verifyProperty(Temporal.Duration.prototype, "round", {
  writable: true,
  enumerable: false,
  configurable: true,
});
