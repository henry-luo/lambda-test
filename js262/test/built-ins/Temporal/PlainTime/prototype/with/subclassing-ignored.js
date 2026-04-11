

/*---
esid: sec-temporal.plaintime.prototype.with
description: Objects of a subclass are never created as return values for with()
includes: [temporalHelpers.js]
features: [Temporal]
---*/

TemporalHelpers.checkSubclassingIgnored(
  Temporal.PlainTime,
  [12, 34, 56, 987, 654, 321],
  "with",
  [{ nanosecond: 1 }],
  (result) => TemporalHelpers.assertPlainTime(result, 12, 34, 56, 987, 654, 1),
);
