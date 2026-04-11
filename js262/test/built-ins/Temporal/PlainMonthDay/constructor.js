

/*---
esid: sec-temporal.plainmonthday
description: Temporal.PlainMonthDay constructor cannot be called as a function
info: |
    1. If NewTarget is undefined, throw a TypeError exception.
features: [Temporal]
---*/

assert.throws(TypeError, () => Temporal.PlainMonthDay(1, 2));
