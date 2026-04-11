

/*---
esid: sec-temporal.zoneddatetime
description: Temporal.ZonedDateTime constructor cannot be called as a function
info: |
    1. If NewTarget is undefined, throw a TypeError exception.
features: [Temporal]
---*/

assert.throws(TypeError, () => Temporal.ZonedDateTime(0n, "UTC"));
