

/*---
esid: sec-temporal.instant.prototype.tozoneddatetimeiso
description: Test time zone parameters.
features: [Temporal]
---*/

const inst = new Temporal.Instant(1_000_000_000_000_000_000n);


const zdt = inst.toZonedDateTimeISO("UTC");
assert.sameValue(inst.epochNanoseconds, zdt.epochNanoseconds);
assert.sameValue(zdt.timeZoneId, "UTC");


const zdtNonUTC = inst.toZonedDateTimeISO("-05:00");
assert.sameValue(inst.epochNanoseconds, zdtNonUTC.epochNanoseconds);
assert.sameValue(zdtNonUTC.timeZoneId, "-05:00");
