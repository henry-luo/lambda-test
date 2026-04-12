

/*---
esid: sec-temporal.plaindate.prototype.tolocalestring
description: >
    toLocaleString return a string.
features: [Temporal]
---*/

const date = new Temporal.PlainDate(2000, 5, 2);

assert.sameValue(typeof date.toLocaleString("en", { dateStyle: "short" }), "string");
