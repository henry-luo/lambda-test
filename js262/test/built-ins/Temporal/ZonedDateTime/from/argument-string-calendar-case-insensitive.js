

/*---
esid: sec-temporal.zoneddatetime.from
description: The calendar name is case-insensitive
features: [Temporal]
---*/

const arg = "1976-11-18T00:00[UTC][u-ca=ISO8601]"
const result = Temporal.ZonedDateTime.from(arg);
assert.sameValue(result.calendarId, "iso8601", "Calendar is case-insensitive");
