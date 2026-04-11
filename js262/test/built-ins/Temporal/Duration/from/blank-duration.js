

/*---
esid: sec-temporal.duration.from
description: Behaviour with blank duration
features: [Temporal]
includes: [temporalHelpers.js]
---*/

const blank = new Temporal.Duration();
const result = Temporal.Duration.from(blank);
TemporalHelpers.assertDuration(result, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "result is also blank");
