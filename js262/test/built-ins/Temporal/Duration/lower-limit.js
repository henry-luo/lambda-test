

/*---
includes: [temporalHelpers.js]
esid: sec-temporal.duration
description: Minimum value is zero.
features: [Temporal]
---*/

TemporalHelpers.assertDuration(new Temporal.Duration(0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
                               0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
