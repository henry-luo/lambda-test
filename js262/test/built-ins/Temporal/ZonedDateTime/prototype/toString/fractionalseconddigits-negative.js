

/*---
esid: sec-temporal.zoneddatetime.prototype.tostring
description: Epoch milliseconds should be rounded down before adding negative micro/nanoseconds back in
features: [BigInt, Temporal]
---*/

const zdt = new Temporal.ZonedDateTime(-1000000000000001000n, "UTC");
assert.sameValue(zdt.toString(), "1938-04-24T22:13:19.999999+00:00[UTC]",
                 "epoch milliseconds should be rounded down to compute seconds");
