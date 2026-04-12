

/*---
esid: sec-temporal.zoneddatetime.prototype.add
description: Behaviour with blank duration
features: [Temporal]
---*/

const dt = new Temporal.ZonedDateTime(1n, "UTC");
const blank = new Temporal.Duration();
const result = dt.add(blank);
assert.sameValue(result.epochNanoseconds, 1n, "result is unchanged");
