

/*---
esid: sec-temporal.zoneddatetime.prototype.with
description: Throws if given a property bag with a calendar
features: [Temporal]
---*/

const zdt = new Temporal.ZonedDateTime(0n, "UTC");


assert.throws(TypeError, () => zdt.with({
  month: 2,
  calendar: "iso8601"
}));
