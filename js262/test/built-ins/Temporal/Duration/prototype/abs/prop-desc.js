

/*---
esid: sec-temporal.duration.prototype.abs
description: The "abs" property of Temporal.Duration.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.Duration.prototype.abs,
  "function",
  "`typeof Duration.prototype.abs` is `function`"
);

verifyProperty(Temporal.Duration.prototype, "abs", {
  writable: true,
  enumerable: false,
  configurable: true,
});
