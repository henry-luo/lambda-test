

/*---
esid: sec-temporal.plainyearmonth.from
description: The calendar name is case-insensitive
features: [Temporal]
---*/

const arg = "1976-11[u-ca=ISO8601]";
const result = Temporal.PlainYearMonth.from(arg);
assert.sameValue(result.calendarId, "iso8601", "Calendar is case-insensitive");
