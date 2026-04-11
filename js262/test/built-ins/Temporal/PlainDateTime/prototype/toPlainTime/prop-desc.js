

/*---
esid: sec-temporal.plaindatetime.prototype.toplaintime
description: The "toPlainTime" property of Temporal.PlainDateTime.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainDateTime.prototype.toPlainTime,
  "function",
  "`typeof PlainDateTime.prototype.toPlainTime` is `function`"
);

verifyProperty(Temporal.PlainDateTime.prototype, "toPlainTime", {
  writable: true,
  enumerable: false,
  configurable: true,
});
