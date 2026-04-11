

/*---
esid: sec-get-temporal.plaintime.prototype.nanosecond
description: Basic functionality
features: [Temporal]
---*/

const instance = new Temporal.PlainTime(12, 34, 56, 987, 654, 321);
assert.sameValue(instance.nanosecond, 321);
