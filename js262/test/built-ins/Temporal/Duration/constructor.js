

/*---
esid: sec-temporal.duration
description: Temporal.Duration constructor cannot be called as a function
info: |
    1. If NewTarget is undefined, throw a TypeError exception.
features: [Temporal]
---*/

assert.throws(TypeError, () => Temporal.Duration());
