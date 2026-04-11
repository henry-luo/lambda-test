

/*---
esid: sec-temporal.plainyearmonth.prototype.subtract
description: A string is parsed into the correct object when passed as the argument
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const instance = Temporal.PlainYearMonth.from({ year: 2000, month: 5 });
const result = instance.subtract("P3M");
TemporalHelpers.assertPlainYearMonth(result, 2000, 2, "M02");
