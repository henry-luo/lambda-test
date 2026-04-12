

/*---
esid: sec-temporal.plaindate.from
description: Months and days must be non-negative integers
features: [Temporal]
---*/

assert.throws(RangeError, () => Temporal.PlainDate.from({ year: 2000, day: 1, month: -1 }));
assert.throws(RangeError, () => Temporal.PlainDate.from({ year: 2000, month: 1, day: -1 }));
