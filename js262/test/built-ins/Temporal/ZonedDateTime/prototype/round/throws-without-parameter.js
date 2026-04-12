

/*---
esid: sec-temporal.zoneddatetime.prototype.round
description: Throws without parameter.
features: [Temporal]
---*/

const zdt = new Temporal.ZonedDateTime(217175010123456789n, "+01:00");

assert.throws(TypeError, () => zdt.round());
