

/*---
esid: sec-temporal.duration.prototype.round
description: Rounding mode is taken into account when largestUnit is present.
includes: [temporalHelpers.js]
features: [Temporal]
---*/


const dur = new Temporal.Duration(0, 0, 0, 0,  13, 0, 0, 0, 0, 0);
const zdt = new Temporal.ZonedDateTime(0n, "UTC");

TemporalHelpers.assertDuration(
    dur.round({
        relativeTo: zdt,
        largestUnit: 'hours',
        smallestUnit: 'hours',
        roundingIncrement: 12,
        roundingMode: 'ceil'
    }), 0, 0, 0, 0, 24, 0, 0, 0, 0, 0);
