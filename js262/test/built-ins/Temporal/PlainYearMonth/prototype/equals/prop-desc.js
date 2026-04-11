

/*---
esid: sec-temporal.plainyearmonth.prototype.equals
description: The "equals" property of Temporal.PlainYearMonth.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainYearMonth.prototype.equals,
  "function",
  "`typeof PlainYearMonth.prototype.equals` is `function`"
);

verifyProperty(Temporal.PlainYearMonth.prototype, "equals", {
  writable: true,
  enumerable: false,
  configurable: true,
});
