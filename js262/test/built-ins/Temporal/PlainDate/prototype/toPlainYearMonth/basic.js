

/*---
esid: sec-temporal.plaindate.prototype.toplainyearmonth
description: Basic toPlainYearMonth tests.
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const pd = new Temporal.PlainDate(1970, 12, 24, "iso8601");
const pym = pd.toPlainYearMonth();
TemporalHelpers.assertPlainYearMonth(pym, 1970, 12, "M12");
assert.sameValue(pym.calendarId, "iso8601");
