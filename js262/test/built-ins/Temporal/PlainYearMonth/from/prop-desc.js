

/*---
esid: sec-temporal.plainyearmonth.from
description: The "from" property of Temporal.PlainYearMonth
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainYearMonth.from,
  "function",
  "`typeof PlainYearMonth.from` is `function`"
);

verifyProperty(Temporal.PlainYearMonth, "from", {
  writable: true,
  enumerable: false,
  configurable: true,
});
