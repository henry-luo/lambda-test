

/*---
esid: sec-temporal.plaindatetime.prototype.withplaintime
description: The "withPlainTime" property of Temporal.PlainDateTime.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainDateTime.prototype.withPlainTime,
  "function",
  "`typeof PlainDateTime.prototype.withPlainTime` is `function`"
);

verifyProperty(Temporal.PlainDateTime.prototype, "withPlainTime", {
  writable: true,
  enumerable: false,
  configurable: true,
});
