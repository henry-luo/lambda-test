

/*---
esid: sec-get-temporal.plaindatetime.prototype.hour
description: Basic functionality
features: [Temporal]
---*/

const instance = new Temporal.PlainDateTime(2026, 3, 6, 12, 34, 56, 987, 654, 321);
assert.sameValue(instance.hour, 12);
