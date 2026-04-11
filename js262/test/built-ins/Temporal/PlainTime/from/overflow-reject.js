

/*---
esid: sec-temporal.plaintime.from
description: reject value for overflow option
includes: [temporalHelpers.js]
features: [Temporal]
---*/

assert.throws(RangeError, () => Temporal.PlainTime.from({ hour: 26 }, { overflow: "reject" }));
TemporalHelpers.assertPlainTime(Temporal.PlainTime.from({ hour: 22 }, { overflow: "reject" }),
  22, 0, 0, 0, 0, 0);
