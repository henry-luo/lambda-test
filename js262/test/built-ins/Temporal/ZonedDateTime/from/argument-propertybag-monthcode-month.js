

/*---
esid: sec-temporal.zoneddatetime.from
description: ZonedDateTime can be constructed with monthCode or month; must agree.
includes: [temporalHelpers.js]
features: [Temporal]
---*/


const expected = new Temporal.ZonedDateTime(217119600000000000n, "+01:00");


TemporalHelpers.assertZonedDateTimesEqual(Temporal.ZonedDateTime.from({
  year: 1976,
  monthCode: "M11",
  day: 18,
  timeZone: "+01:00"
}), expected);


TemporalHelpers.assertZonedDateTimesEqual(Temporal.ZonedDateTime.from({
  year: 1976,
  month: 11,
  day: 18,
  timeZone: "+01:00"
}), expected)


assert.throws(RangeError, () => Temporal.ZonedDateTime.from({
  year: 1976,
  month: 11,
  monthCode: "M12",
  day: 18,
  timeZone: "+01:00"
}));
