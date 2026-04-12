

/*---
esid: sec-temporal.zoneddatetime.prototype.add
description: Throws when ambiguous result with reject
features: [Temporal]
---*/


const jan31 = new Temporal.ZonedDateTime(1580511600000000000n, "-08:00");

assert.throws(RangeError, () => jan31.add({ months: 1 }, { overflow: "reject" }));
