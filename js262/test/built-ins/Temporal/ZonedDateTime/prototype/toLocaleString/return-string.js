

/*---
esid: sec-temporal.zoneddatetime.prototype.tolocalestring
description: >
    toLocaleString return a string.
features: [Temporal]
---*/

const datetime = new Temporal.ZonedDateTime(957270896_987_650_000n, "UTC");

assert.sameValue(typeof datetime.toLocaleString("en", { dateStyle: "short" }), "string");
assert.sameValue(typeof datetime.toLocaleString("en", { timeStyle: "short" }), "string");
