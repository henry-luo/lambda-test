

/*---
esid: sec-temporal.plaindate.prototype.toplainyearmonth
description: The "toPlainYearMonth" property of Temporal.PlainDate.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainDate.prototype.toPlainYearMonth,
  "function",
  "`typeof PlainDate.prototype.toPlainYearMonth` is `function`"
);

verifyProperty(Temporal.PlainDate.prototype, "toPlainYearMonth", {
  writable: true,
  enumerable: false,
  configurable: true,
});
