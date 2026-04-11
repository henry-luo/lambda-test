

/*---
esid: sec-temporal.zoneddatetime.constructor
description: A calendar ID is valid input for Calendar
features: [Temporal]
---*/

const arg = "iso8601";

const result = new Temporal.ZonedDateTime(0n, "UTC", arg);
assert.sameValue(result.calendarId, "iso8601", `Calendar created from string "${arg}"`);
