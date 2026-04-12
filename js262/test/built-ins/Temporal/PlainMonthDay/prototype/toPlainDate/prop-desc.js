

/*---
esid: sec-temporal.plainmonthday.prototype.toplaindate
description: The "toPlainDate" property of Temporal.PlainMonthDay.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainMonthDay.prototype.toPlainDate,
  "function",
  "`typeof PlainMonthDay.prototype.toPlainDate` is `function`"
);

verifyProperty(Temporal.PlainMonthDay.prototype, "toPlainDate", {
  writable: true,
  enumerable: false,
  configurable: true,
});
