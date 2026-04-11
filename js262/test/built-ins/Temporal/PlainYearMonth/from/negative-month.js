

/*---
esid: sec-temporal.plainyearmonth.prototype.from
description: Months must be non-negative integers
features: [Temporal]
---*/

assert.throws(RangeError, () => Temporal.PlainYearMonth.from({ year: 1, month: -1 }));
