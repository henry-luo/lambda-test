

/*---
esid: sec-get-temporal.zoneddatetime.prototype.minute
description: Basic functionality
features: [Temporal]
---*/

const instance = new Temporal.ZonedDateTime(3721_001_001_001n, "UTC");
assert.sameValue(instance.minute, 2);
