

/*---
esid: sec-temporal.duration.prototype.total
description: The "total" property of Temporal.Duration.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.Duration.prototype.total,
  "function",
  "`typeof Duration.prototype.total` is `function`"
);

verifyProperty(Temporal.Duration.prototype, "total", {
  writable: true,
  enumerable: false,
  configurable: true,
});
