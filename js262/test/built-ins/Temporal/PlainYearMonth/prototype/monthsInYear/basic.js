

/*---
esid: sec-get-temporal.plainyearmonth.prototype.monthsinyear
description: monthsInYear works
features: [Temporal]
---*/

const ym = new Temporal.PlainYearMonth(1976, 11);
assert.sameValue(ym.monthsInYear, 12);
