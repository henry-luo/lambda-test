

/*---
esid: sec-temporal.plaindate.prototype.since
description: Type conversions for roundingMode option
includes: [compareArray.js, temporalHelpers.js]
features: [Temporal]
---*/

const earlier = new Temporal.PlainDate(2000, 5, 2);
const later = new Temporal.PlainDate(2001, 6, 3);
TemporalHelpers.checkStringOptionWrongType("roundingMode", "trunc",
  (roundingMode) => later.since(earlier, { smallestUnit: "year", roundingMode }),
  (result, descr) => TemporalHelpers.assertDuration(result, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, descr),
);
