

/*---
esid: sec-temporal.plaindate.prototype.withcalendar
description: A calendar ID is valid input for Calendar
features: [Temporal]
---*/

const instance = new Temporal.PlainDate(1976, 11, 18, "iso8601");

const arg = "iso8601";

const result = instance.withCalendar(arg);
assert.sameValue(result.calendarId, "iso8601", `Calendar created from string "${arg}"`);
