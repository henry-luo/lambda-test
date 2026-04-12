

/*---
esid: sec-temporal.plainyearmonth
description: PlainYearMonth constructor works
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const ym = new Temporal.PlainYearMonth(1976, 11);
assert.sameValue(typeof ym, "object");
TemporalHelpers.assertPlainYearMonth(ym, 1976, 11, "M11");
