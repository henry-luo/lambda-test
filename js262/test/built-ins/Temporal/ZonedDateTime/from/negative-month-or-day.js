

/*---
esid: sec-temporal.zoneddatetime.from
description: Months and days must be non-negative integers
features: [Temporal]
---*/

assert.throws(RangeError, () => Temporal.ZonedDateTime.from({ year: 2000, day: 1, timeZone: "UTC", month: -1 }));
assert.throws(RangeError, () => Temporal.ZonedDateTime.from({ year: 2000, month: 1, timeZone: "UTC", day: -1 }));
