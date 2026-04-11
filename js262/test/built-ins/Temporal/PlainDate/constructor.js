

/*---
esid: sec-temporal.plaindate
description: Temporal.PlainDate constructor cannot be called as a function
info: |
    1. If NewTarget is undefined, throw a TypeError exception.
features: [Temporal]
---*/

assert.throws(TypeError, () => Temporal.PlainDate(1970, 1, 2));
