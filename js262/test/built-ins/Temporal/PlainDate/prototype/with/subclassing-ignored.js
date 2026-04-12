

/*---
esid: sec-temporal.plaindate.prototype.with
description: Objects of a subclass are never created as return values for with()
includes: [temporalHelpers.js]
features: [Temporal]
---*/

TemporalHelpers.checkSubclassingIgnored(
  Temporal.PlainDate,
  [2000, 5, 2],
  "with",
  [{ day: 20 }],
  (result) => TemporalHelpers.assertPlainDate(result, 2000, 5, "M05", 20),
);
