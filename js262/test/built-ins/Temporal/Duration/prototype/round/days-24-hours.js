

/*---
esid: sec-temporal.duration.prototype.round
description: Days are 24 hours if relativeTo not given.
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const hours25 = new Temporal.Duration(0, 0, 0, 0, 25, 0, 0, 0, 0, 0);

TemporalHelpers.assertDuration(hours25.round({ largestUnit: "days" }),
                               0, 0, 0, 1, 1, 0, 0, 0, 0, 0);
