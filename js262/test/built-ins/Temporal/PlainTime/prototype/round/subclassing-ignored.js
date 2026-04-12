

/*---
esid: sec-temporal.plaintime.prototype.round
description: Objects of a subclass are never created as return values.
includes: [temporalHelpers.js]
features: [Temporal]
---*/

TemporalHelpers.checkSubclassingIgnored(
  Temporal.PlainTime,
  [12, 34, 56, 987, 654, 321],
  "round",
  [{ smallestUnit: 'second' }],
  (result) => TemporalHelpers.assertPlainTime(result, 12, 34, 57, 0, 0, 0),
);
