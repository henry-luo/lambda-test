

/*---
esid: sec-temporal.zoneddatetime.prototype.subtract
description: Throws on an ambiguous result with reject.
features: [Temporal]
---*/

const mar31 = Temporal.ZonedDateTime.from("2020-03-31T15:00+00:00[UTC]");

assert.throws(RangeError, () => mar31.subtract({ months: 1 }, { overflow: "reject" }));
