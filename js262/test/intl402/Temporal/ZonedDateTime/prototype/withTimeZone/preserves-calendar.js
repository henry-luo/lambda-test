

/*---
esid: sec-temporal.zoneddatetime.prototype.withtimezone
description: The receiver's calendar is preserved in the return value
features: [Temporal]
---*/

const instance = new Temporal.ZonedDateTime(1572342398_271_986_102n, "-07:00", "gregory");
const result = instance.withTimeZone("-08:00");
assert.sameValue(result.calendarId, "gregory", "Calendar is preserved in return value");
