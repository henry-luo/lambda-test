

/*---
esid: sec-temporal.zoneddatetime.prototype.with
description: Object argument must contain at least one correctly-spelled property.
features: [Temporal]
---*/

const zdt = new Temporal.ZonedDateTime(0n, "UTC");

assert.throws(TypeError, () => zdt.with({}));
assert.throws(TypeError, () => zdt.with({ months: 12 }));
