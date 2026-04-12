

/*---
esid: sec-temporal.plainyearmonth.prototype.subtract
description: Objects of a subclass are never created as return values for subtract()
includes: [temporalHelpers.js]
features: [Temporal]
---*/

TemporalHelpers.checkSubclassingIgnored(
  Temporal.PlainYearMonth,
  [2000, 5],
  "subtract",
  [{ months: 1 }],
  (result) => TemporalHelpers.assertPlainYearMonth(result, 2000, 4, "M04"),
);
