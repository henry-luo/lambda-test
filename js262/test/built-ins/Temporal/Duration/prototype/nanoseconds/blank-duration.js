

/*---
esid: sec-get-temporal.duration.prototype.nanoseconds
description: Behaviour with blank duration
features: [Temporal]
---*/

const blank = new Temporal.Duration();
assert.sameValue(blank.nanoseconds, 0);
