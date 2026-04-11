

/*---
esid: sec-get-temporal.duration.prototype.seconds
description: Behaviour with blank duration
features: [Temporal]
---*/

const blank = new Temporal.Duration();
assert.sameValue(blank.seconds, 0);
