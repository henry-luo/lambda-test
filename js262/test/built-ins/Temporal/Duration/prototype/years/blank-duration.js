

/*---
esid: sec-get-temporal.duration.prototype.years
description: Behaviour with blank duration
features: [Temporal]
---*/

const blank = new Temporal.Duration();
assert.sameValue(blank.years, 0);
