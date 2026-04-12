

/*---
esid: sec-temporal.instant.prototype.tostring
description: Type conversions for smallestUnit option
includes: [compareArray.js, temporalHelpers.js]
features: [Temporal]
---*/

const instant = new Temporal.Instant(1_000_000_000_123_987_500n);
TemporalHelpers.checkStringOptionWrongType("smallestUnit", "microsecond",
  (smallestUnit) => instant.toString({ smallestUnit }),
  (result, descr) => assert.sameValue(result, "2001-09-09T01:46:40.123987Z", descr),
);
