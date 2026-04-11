

/*---
esid: sec-temporal.plainmonthday.prototype.with
description: Objects of a subclass are never created as return values for with()
includes: [temporalHelpers.js]
features: [Temporal]
---*/

TemporalHelpers.checkSubclassingIgnored(
  Temporal.PlainMonthDay,
  [5, 2],
  "with",
  [{ day: 20 }],
  (result) => TemporalHelpers.assertPlainMonthDay(result, "M05", 20),
);
