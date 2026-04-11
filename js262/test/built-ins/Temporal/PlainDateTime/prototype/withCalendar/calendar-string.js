

/*---
esid: sec-temporal.plaindatetime.prototype.withcalendar
description: A calendar ID is valid input for Calendar
features: [Temporal]
---*/

const instance = new Temporal.PlainDateTime(1976, 11, 18, 15, 23, 30, 123, 456, 789, "iso8601");

const arg = "iso8601";

const result = instance.withCalendar(arg);
assert.sameValue(result.calendarId, "iso8601", `Calendar created from string "${arg}"`);
