

/*---
esid: sec-temporal.duration.prototype.valueof
description: The "valueOf" property of Temporal.Duration.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.Duration.prototype.valueOf,
  "function",
  "`typeof Duration.prototype.valueOf` is `function`"
);

verifyProperty(Temporal.Duration.prototype, "valueOf", {
  writable: true,
  enumerable: false,
  configurable: true,
});
