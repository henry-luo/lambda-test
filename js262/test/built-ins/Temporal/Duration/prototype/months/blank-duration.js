

/*---
esid: sec-get-temporal.duration.prototype.months
description: Behaviour with blank duration
features: [Temporal]
---*/

const blank = new Temporal.Duration();
assert.sameValue(blank.months, 0);
