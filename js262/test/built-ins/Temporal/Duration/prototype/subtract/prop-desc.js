

/*---
esid: sec-temporal.duration.prototype.subtract
description: The "subtract" property of Temporal.Duration.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.Duration.prototype.subtract,
  "function",
  "`typeof Duration.prototype.subtract` is `function`"
);

verifyProperty(Temporal.Duration.prototype, "subtract", {
  writable: true,
  enumerable: false,
  configurable: true,
});
