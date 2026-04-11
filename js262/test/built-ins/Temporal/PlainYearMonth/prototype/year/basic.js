

/*---
esid: sec-get-temporal.plainyearmonth.prototype.year
description: The "year" property of Temporal.PlainYearMonth.prototype
features: [Temporal]
---*/

assert.sameValue((new Temporal.PlainYearMonth(2021, 7)).year, 2021);
assert.sameValue(Temporal.PlainYearMonth.from('2019-03').year, 2019);
