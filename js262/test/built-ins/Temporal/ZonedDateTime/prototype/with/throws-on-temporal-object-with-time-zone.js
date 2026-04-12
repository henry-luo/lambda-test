

/*---
esid: sec-temporal.zoneddatetime.prototype.with
description: Throws if given a Temporal.ZonedDateTime with a time zone
features: [Temporal]
---*/

const zdt = new Temporal.ZonedDateTime(0n, "UTC");

assert.throws(TypeError, () => zdt.with(zdt));
