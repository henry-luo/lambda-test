

/*---
esid: sec-temporal.duration.prototype.tojson
description: Balancing the maximum nanoseconds and seconds does not go out of range
features: [Temporal]
---*/

const d = new Temporal.Duration(0, 0, 0, 0, 0, 0,  Number.MAX_SAFE_INTEGER, 0, 0,  999_999_999);
assert.sameValue(d.toJSON(), "PT9007199254740991.999999999S", "max value ns and s does not go out of range");
