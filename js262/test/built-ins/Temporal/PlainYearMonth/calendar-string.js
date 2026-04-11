

/*---
esid: sec-temporal.plainyearmonth.constructor
description: A calendar ID is valid input for Calendar
features: [Temporal]
---*/

const arg = "iso8601";

const result = new Temporal.PlainYearMonth(2000, 5, arg, 1);
assert.sameValue(result.calendarId, "iso8601", `Calendar created from string "${arg}"`);
