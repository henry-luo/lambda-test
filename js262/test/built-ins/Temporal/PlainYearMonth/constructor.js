

/*---
esid: sec-temporal.plainyearmonth
description: Temporal.PlainYearMonth constructor cannot be called as a function
info: |
    1. If NewTarget is undefined, throw a TypeError exception.
features: [Temporal]
---*/

assert.throws(TypeError, () => Temporal.PlainYearMonth(1970, 1));
