

/*---
esid: sec-temporal.instant.prototype.tozoneddatetimeiso
description: >
  toZonedDateTimeISO() results in a ZonedDateTime with builtin ISO calendar
features: [Temporal]
---*/

const instance = new Temporal.Instant(0n);
const result = instance.toZonedDateTimeISO("UTC");
assert.sameValue(result.calendarId, "iso8601", "calendar string is iso8601");
