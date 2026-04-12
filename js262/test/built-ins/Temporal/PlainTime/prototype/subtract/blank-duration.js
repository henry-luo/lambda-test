

/*---
esid: sec-temporal.plaintime.prototype.subtract
description: Behaviour with blank duration
features: [Temporal]
includes: [temporalHelpers.js]
---*/

const t = new Temporal.PlainTime(14, 1);
const blank = new Temporal.Duration();
const result = t.subtract(blank);
TemporalHelpers.assertPlainTime(result, 14, 1, 0, 0, 0, 0, "result is unchanged");
