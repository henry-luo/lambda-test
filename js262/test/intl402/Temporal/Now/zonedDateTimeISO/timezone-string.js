

/*---
esid: sec-temporal.now.zoneddatetimeiso
description: String calendar argument
features: [Temporal]
---*/

const zdt = Temporal.Now.zonedDateTimeISO("America/Los_Angeles");
assert(zdt instanceof Temporal.ZonedDateTime);
assert.sameValue(zdt.calendarId, "iso8601");
assert.sameValue(zdt.timeZoneId, "America/Los_Angeles");
