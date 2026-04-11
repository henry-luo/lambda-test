

/*---
esid: sec-temporal.zoneddatetime.prototype.since
description: zdt.since(earlier) == earlier.until(zdt) with default options.
includes: [temporalHelpers.js]
features: [Temporal]
---*/


const zdt = new Temporal.ZonedDateTime(217175010123456789n, "+01:00");
const earlier = new Temporal.ZonedDateTime(-120898800000000000n, "+01:00");

TemporalHelpers.assertDurationsEqual(zdt.since(earlier), earlier.until(zdt));

