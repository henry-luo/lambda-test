

/*---
esid: sec-temporal.duration.prototype.tostring
description: The "toString" property of Temporal.Duration.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.Duration.prototype.toString,
  "function",
  "`typeof Duration.prototype.toString` is `function`"
);

verifyProperty(Temporal.Duration.prototype, "toString", {
  writable: true,
  enumerable: false,
  configurable: true,
});
