

/*---
esid: sec-temporal.duration
description: Undefined arguments should be treated as zero.
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const args = [];

const explicit = new Temporal.Duration(...args, undefined);
TemporalHelpers.assertDuration(explicit, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "explicit");

const implicit = new Temporal.Duration(...args);
TemporalHelpers.assertDuration(implicit, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "implicit");
