

/*---
esid: sec-get-temporal.duration.prototype.minutes
description: Basic functionality
features: [Temporal]
---*/

const instance = new Temporal.Duration(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
assert.sameValue(instance.minutes, 6);

const negInstance = new Temporal.Duration(-1, -2, -3, -4, -5, -6, -7, -8, -9, -10);
assert.sameValue(negInstance.minutes, -6);
