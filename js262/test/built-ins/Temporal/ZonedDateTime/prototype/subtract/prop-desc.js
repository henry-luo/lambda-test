

/*---
esid: sec-temporal.zoneddatetime.prototype.subtract
description: The "subtract" property of Temporal.ZonedDateTime.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.ZonedDateTime.prototype.subtract,
  "function",
  "`typeof ZonedDateTime.prototype.subtract` is `function`"
);

verifyProperty(Temporal.ZonedDateTime.prototype, "subtract", {
  writable: true,
  enumerable: false,
  configurable: true,
});
