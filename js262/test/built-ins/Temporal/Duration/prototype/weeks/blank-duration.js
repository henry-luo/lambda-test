

/*---
esid: sec-get-temporal.duration.prototype.weeks
description: Behaviour with blank duration
features: [Temporal]
---*/

const blank = new Temporal.Duration();
assert.sameValue(blank.weeks, 0);
