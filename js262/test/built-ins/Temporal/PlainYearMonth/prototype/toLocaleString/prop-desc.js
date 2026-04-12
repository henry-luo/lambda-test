

/*---
esid: sec-temporal.plainyearmonth.prototype.tolocalestring
description: The "toLocaleString" property of Temporal.PlainYearMonth.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainYearMonth.prototype.toLocaleString,
  "function",
  "`typeof PlainYearMonth.prototype.toLocaleString` is `function`"
);

verifyProperty(Temporal.PlainYearMonth.prototype, "toLocaleString", {
  writable: true,
  enumerable: false,
  configurable: true,
});
