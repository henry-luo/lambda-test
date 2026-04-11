

/*---
esid: sec-get-temporal.duration.prototype.minutes
description: Behaviour with blank duration
features: [Temporal]
---*/

const blank = new Temporal.Duration();
assert.sameValue(blank.minutes, 0);
