

/*---
esid: sec-temporal.zoneddatetime.prototype.equals
description: Different time zones not equal.
features: [Temporal]
---*/

const zdt = new Temporal.ZonedDateTime(0n, "-05:00", "iso8601");
const zdt2 = new Temporal.ZonedDateTime(0n, "UTC", "iso8601");

assert(!zdt.equals(zdt2));

