

/*---
esid: sec-temporal.zoneddatetime.prototype.withcalendar
description: The receiver's exact time is preserved in the return value
features: [Temporal]
---*/

const instance = new Temporal.ZonedDateTime(1572342398_271_986_102n, "-07:00", "gregory");
const result = instance.withCalendar("japanese");
assert.sameValue(result.epochNanoseconds, 1572342398_271_986_102n, "Exact time is preserved in return value");
