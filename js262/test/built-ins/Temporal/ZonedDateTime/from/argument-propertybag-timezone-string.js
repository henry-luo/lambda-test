

/*---
esid: sec-temporal.zoneddatetime.from
description: Time zone IDs are valid input for a time zone
features: [Temporal]
---*/

["UTC", "+01:30"].forEach((timeZone) => {
  const result = Temporal.ZonedDateTime.from({ year: 2000, month: 5, day: 2, timeZone });
  assert.sameValue(result.timeZoneId, timeZone, `Time zone created from string "${timeZone}"`);
});
