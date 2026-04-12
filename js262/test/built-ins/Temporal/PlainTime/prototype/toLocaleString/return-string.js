

/*---
esid: sec-temporal.plaintime.prototype.tolocalestring
description: >
    toLocaleString return a string.
features: [Temporal]
---*/

const time = new Temporal.PlainTime(12, 34, 56, 987, 654, 321);

assert.sameValue(typeof time.toLocaleString("en", { timeStyle: "short" }), "string");
