

/*---
esid: sec-temporal.zoneddatetime.prototype.withplaintime
description: The "withPlainTime" property of Temporal.ZonedDateTime.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.ZonedDateTime.prototype.withPlainTime,
  "function",
  "`typeof ZonedDateTime.prototype.withPlainTime` is `function`"
);

verifyProperty(Temporal.ZonedDateTime.prototype, "withPlainTime", {
  writable: true,
  enumerable: false,
  configurable: true,
});
