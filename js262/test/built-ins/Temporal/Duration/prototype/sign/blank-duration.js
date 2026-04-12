

/*---
esid: sec-get-temporal.duration.prototype.sign
description: Behaviour with blank duration
features: [Temporal]
---*/

const blank = new Temporal.Duration();
assert.sameValue(blank.sign, 0);

