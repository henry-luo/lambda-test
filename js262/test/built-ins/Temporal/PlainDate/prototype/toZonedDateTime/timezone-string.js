

/*---
esid: sec-temporal.plaindate.prototype.tozoneddatetime
description: Time zone IDs are valid input for a time zone
features: [Temporal]
---*/

const instance = new Temporal.PlainDate(2000, 5, 2);

["UTC", "+01:30"].forEach((timeZone) => {
  const result = instance.toZonedDateTime(timeZone);
  assert.sameValue(result.timeZoneId, timeZone, `time zone slot should store string "${timeZone}"`);
});
