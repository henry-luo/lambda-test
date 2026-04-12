

/*---
esid: sec-temporal.plainyearmonth.prototype.constructor
description: Test for Temporal.PlainYearMonth.prototype.constructor.
info: The initial value of Temporal.PlainYearMonth.prototype.constructor is %Temporal.PlainYearMonth%.
includes: [propertyHelper.js]
features: [Temporal]
---*/

verifyProperty(Temporal.PlainYearMonth.prototype, "constructor", {
  value: Temporal.PlainYearMonth,
  writable: true,
  enumerable: false,
  configurable: true,
});
