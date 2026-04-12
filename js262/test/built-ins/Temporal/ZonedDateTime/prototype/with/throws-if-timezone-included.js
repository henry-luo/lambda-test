

/*---
esid: sec-temporal.zoneddatetime.prototype.with
description: Throws if timeZone is included.
features: [Temporal]
---*/

const zdt = new Temporal.ZonedDateTime(0n, "UTC");


assert.throws(TypeError, () => zdt.with({
  month: 2,
  timeZone: "UTC"
}));
