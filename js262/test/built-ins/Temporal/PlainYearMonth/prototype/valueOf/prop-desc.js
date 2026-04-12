

/*---
esid: sec-temporal.plainyearmonth.prototype.valueof
description: The "valueOf" property of Temporal.PlainYearMonth.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainYearMonth.prototype.valueOf,
  "function",
  "`typeof PlainYearMonth.prototype.valueOf` is `function`"
);

verifyProperty(Temporal.PlainYearMonth.prototype, "valueOf", {
  writable: true,
  enumerable: false,
  configurable: true,
});
