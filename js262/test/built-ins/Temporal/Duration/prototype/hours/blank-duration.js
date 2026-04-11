

/*---
esid: sec-get-temporal.duration.prototype.hours
description: Behaviour with blank duration
features: [Temporal]
---*/

const blank = new Temporal.Duration();
assert.sameValue(blank.hours, 0);
