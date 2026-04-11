

/*---
esid: sec-temporal.plaintime.prototype.round
description: Type conversions for smallestUnit option
includes: [compareArray.js, temporalHelpers.js]
features: [Temporal]
---*/

const time = new Temporal.PlainTime(12, 34, 56, 123, 987, 500);
TemporalHelpers.checkStringOptionWrongType("smallestUnit", "microsecond",
  (smallestUnit) => time.round({ smallestUnit }),
  (result, descr) => TemporalHelpers.assertPlainTime(result, 12, 34, 56, 123, 988, 0, descr),
);
