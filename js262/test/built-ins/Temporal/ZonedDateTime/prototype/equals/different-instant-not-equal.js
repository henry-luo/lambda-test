

/*---
esid: sec-temporal.zoneddatetime.prototype.equals
description: Different instants not equal.
features: [Temporal]
---*/

const zdt = new Temporal.ZonedDateTime(0n, "-05:00", "iso8601");
const zdt2 = new Temporal.ZonedDateTime(1n, "-05:00", "iso8601");

assert(!zdt.equals(zdt2));
