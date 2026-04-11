

/*---
esid: sec-temporal.duration.prototype.tolocalestring
description: >
    toLocaleString return a string.
features: [Temporal]
---*/

var duration = new Temporal.Duration();

assert.sameValue(typeof duration.toLocaleString(), "string");
