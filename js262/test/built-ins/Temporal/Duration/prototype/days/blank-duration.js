

/*---
esid: sec-get-temporal.duration.prototype.days
description: Behaviour with blank duration
features: [Temporal]
---*/

const blank = new Temporal.Duration();
assert.sameValue(blank.days, 0);
