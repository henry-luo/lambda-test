

/*---
esid: sec-temporal.plaintime.prototype.tostring
description: Type conversions for roundingMode option
includes: [compareArray.js, temporalHelpers.js]
features: [Temporal]
---*/

const time = new Temporal.PlainTime(12, 34, 56, 123, 987, 500);
TemporalHelpers.checkStringOptionWrongType("roundingMode", "trunc",
  (roundingMode) => time.toString({ smallestUnit: "microsecond", roundingMode }),
  (result, descr) => assert.sameValue(result, "12:34:56.123987", descr),
);
