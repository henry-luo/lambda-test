

/*---
esid: sec-temporal.zoneddatetime.prototype.startofday
description: Test TZDB edge case where start of day is not 00:00 nor 01:00
features: [Temporal]
---*/


const instance = Temporal.ZonedDateTime.from({
  year: 1919,
  month: 3,
  day: 31,
  hour: 12,
  timeZone: "America/Toronto",
});
const result = instance.startOfDay();
assert.sameValue(result.hour, 0, "1919-03-31 started at hour 0");
assert.sameValue(result.minute, 30, "1919-03-31 started at minute 30");
