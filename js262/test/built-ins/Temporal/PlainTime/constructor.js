

/*---
esid: sec-temporal.plaintime
description: Temporal.PlainTime constructor cannot be called as a function
info: |
    1. If NewTarget is undefined, throw a TypeError exception.
features: [Temporal]
---*/

assert.throws(TypeError, () => Temporal.PlainTime(12, 0, 0));
