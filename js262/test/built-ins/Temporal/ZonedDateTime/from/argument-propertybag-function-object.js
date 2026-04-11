

/*---
esid: sec-temporal.zoneddatetime.from
description: Options may be a function object.
includes: [temporalHelpers.js]
features: [Temporal]
---*/


const expected = new Temporal.ZonedDateTime(217119600000000000n, "+01:00");

TemporalHelpers.assertZonedDateTimesEqual( Temporal.ZonedDateTime.from({
  year: 1976,
  month: 11,
  day: 18,
  timeZone: "+01:00"
}, () => {
}), expected);
