

/*---
esid: sec-temporal.plaintime.prototype.add
description: Behaviour with blank duration
features: [Temporal]
includes: [temporalHelpers.js]
---*/

const t = new Temporal.PlainTime(14, 1);
const blank = new Temporal.Duration();
const result = t.add(blank);
TemporalHelpers.assertPlainTime(result, 14, 1, 0, 0, 0, 0, "result is unchanged");
