

/*---
esid: sec-temporal.plainyearmonth.prototype.monthcode
description: monthCode property for PlainYearMonth
features: [Temporal]
---*/

assert.sameValue((new Temporal.PlainYearMonth(1999, 6)).monthCode, 'M06');
