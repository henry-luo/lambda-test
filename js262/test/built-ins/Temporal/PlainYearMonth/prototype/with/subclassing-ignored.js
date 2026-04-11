

/*---
esid: sec-temporal.plainyearmonth.prototype.with
description: Objects of a subclass are never created as return values for with()
includes: [temporalHelpers.js]
features: [Temporal]
---*/

TemporalHelpers.checkSubclassingIgnored(
  Temporal.PlainYearMonth,
  [2000, 5],
  "with",
  [{ month: 11 }],
  (result) => TemporalHelpers.assertPlainYearMonth(result, 2000, 11, "M11"),
);
