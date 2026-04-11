

/*---
esid: sec-temporal.zoneddatetime.from
description: Options must contain at least the required correctly-spelled properties.
features: [Temporal]
---*/


assert.throws(TypeError, () => Temporal.ZonedDateTime.from({
  years: 1976,
  months: 11,
  days: 18,
  timeZone: "+01:00"
}));
assert.throws(TypeError, () => Temporal.ZonedDateTime.from({
  years: 1976,
  month: 11,
  day: 18,
  timeZone: "+01:00"
}));
assert.throws(TypeError, () => Temporal.ZonedDateTime.from({
  year: 1976,
  months: 11,
  day: 18,
  timeZone: "+01:00"
}));
assert.throws(TypeError, () => Temporal.ZonedDateTime.from({
  year: 1976,
  month: 11,
  days: 18,
  timeZone: "+01:00"
}));

