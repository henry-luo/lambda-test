

/*---
esid: sec-temporal.plainmonthday.from
description: Months and days must be non-negative integers
features: [Temporal]
---*/

assert.throws(RangeError, () => Temporal.PlainMonthDay.from({ day: 1, month: -1 }));
assert.throws(RangeError, () => Temporal.PlainMonthDay.from({ month: 1, day: -1 }));
