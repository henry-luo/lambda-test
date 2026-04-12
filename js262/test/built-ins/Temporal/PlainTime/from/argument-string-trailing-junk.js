

/*---
esid: sec-temporal.plaintime.from
description: RangeError thrown if a string argument has trailing junk
features: [Temporal, arrow-function]
---*/

const arg = "15:23:30.100junk";
assert.throws(RangeError, () => Temporal.PlainTime.from(arg));
