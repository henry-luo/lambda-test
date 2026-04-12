

/*---
esid: sec-temporal.plainyearmonth.prototype.add
description: Objects of a subclass are never created as return values for add()
includes: [temporalHelpers.js]
features: [Temporal]
---*/

TemporalHelpers.checkSubclassingIgnored(
  Temporal.PlainYearMonth,
  [2000, 5],
  "add",
  [{ months: 1 }],
  (result) => TemporalHelpers.assertPlainYearMonth(result, 2000, 6, "M06"),
);
