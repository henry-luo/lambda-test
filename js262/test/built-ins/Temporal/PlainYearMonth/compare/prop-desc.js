

/*---
esid: sec-temporal.plainyearmonth.compare
description: The "compare" property of Temporal.PlainYearMonth
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainYearMonth.compare,
  "function",
  "`typeof PlainYearMonth.compare` is `function`"
);

verifyProperty(Temporal.PlainYearMonth, "compare", {
  writable: true,
  enumerable: false,
  configurable: true,
});
