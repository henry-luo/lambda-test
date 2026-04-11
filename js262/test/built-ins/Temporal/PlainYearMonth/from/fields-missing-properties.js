

/*---
esid: sec-temporal.plainyearmonth.from
description: Throws TypeError with incorrect input data type
features: [Temporal]
---*/

assert.throws(TypeError, () => Temporal.PlainYearMonth.from({}), "at least one correctly spelled property is required");
assert.throws(TypeError, () => Temporal.PlainYearMonth.from({ month: 1 }), "year is required");
assert.throws(TypeError, () => Temporal.PlainYearMonth.from({ year: 2021 }), "month or monthCode is required");
