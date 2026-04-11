

/*---
esid: sec-temporal.zoneddatetime.prototype.with
description: month and monthCode must agree.
features: [Temporal]
---*/

const zdt = new Temporal.ZonedDateTime(0n, "UTC");


assert.throws(RangeError, () => zdt.with({
  month: 5,
  monthCode: "M06"
}));
