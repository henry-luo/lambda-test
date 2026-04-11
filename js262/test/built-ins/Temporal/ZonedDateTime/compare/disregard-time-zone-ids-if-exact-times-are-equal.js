

/*---
esid: sec-temporal.zoneddatetime.compare
description: Disregards time zone IDs if exact times are equal.
features: [Temporal]
---*/


const zdt1 = new Temporal.ZonedDateTime(217175010123456789n, "+01:00");

assert.sameValue(Temporal.ZonedDateTime.compare(zdt1, zdt1.withTimeZone("+05:30")), 0);
