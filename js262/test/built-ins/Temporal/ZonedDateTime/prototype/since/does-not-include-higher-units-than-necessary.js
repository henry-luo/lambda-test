

/*---
esid: sec-temporal.zoneddatetime.prototype.since
description: Does not include higher units than necessary in the return value.
includes: [temporalHelpers.js]
features: [Temporal]
---*/


const lastFeb20 = new Temporal.ZonedDateTime(1582930800000000000n, "+01:00");
const lastFeb21 = new Temporal.ZonedDateTime(1614466800000000000n, "+01:00");

TemporalHelpers.assertDuration(lastFeb21.since(lastFeb20),
                               0, 0, 0, 0, 8760, 0, 0, 0, 0, 0);
TemporalHelpers.assertDuration(lastFeb21.since(lastFeb20, { largestUnit: "months" }),
                               0, 11, 0, 28, 0, 0, 0, 0, 0, 0);
TemporalHelpers.assertDuration(lastFeb21.since(lastFeb20, { largestUnit: "years" }),
                               0, 11, 0, 28, 0, 0, 0, 0, 0, 0);
