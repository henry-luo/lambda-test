

/*---
esid: sec-temporal.zoneddatetime.prototype.add
description: Constrains result when ambiguous.
includes: [temporalHelpers.js]
features: [Temporal]
---*/


const jan31 = new Temporal.ZonedDateTime(1580511600000000000n, "-08:00");

const expected = new Temporal.ZonedDateTime(1583017200000000000n, "-08:00");

TemporalHelpers.assertZonedDateTimesEqual(jan31.add({ months: 1 }), expected);
TemporalHelpers.assertZonedDateTimesEqual(
    jan31.add({ months: 1 }, { overflow: "constrain" }), expected);
