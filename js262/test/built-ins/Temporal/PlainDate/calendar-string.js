

/*---
esid: sec-temporal.plaindate.constructor
description: A calendar ID is valid input for Calendar
features: [Temporal]
---*/

const arg = "iso8601";

const result = new Temporal.PlainDate(2000, 5, 2, arg);
assert.sameValue(result.calendarId, "iso8601", `Calendar created from string "${arg}"`);
