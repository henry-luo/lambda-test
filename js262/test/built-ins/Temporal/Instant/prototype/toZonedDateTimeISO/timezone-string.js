

/*---
esid: sec-temporal.instant.prototype.tozoneddatetimeiso
description: Time zone IDs are valid input for a time zone
features: [Temporal]
---*/

const instance = new Temporal.Instant(0n);

["UTC", "+01:30"].forEach((timeZone) => {
  const result = instance.toZonedDateTimeISO(timeZone);
  assert.sameValue(result.timeZoneId, timeZone, `time zone slot should store string "${timeZone}"`);
});
