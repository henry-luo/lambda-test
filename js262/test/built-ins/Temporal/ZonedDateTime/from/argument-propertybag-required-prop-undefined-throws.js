

/*---
esid: sec-temporal.zoneddatetime.from
description: from() throws if a required property is undefined.
features: [Temporal]
---*/

assert.throws(TypeError, () => Temporal.ZonedDateTime.from({
  year: 1976,
  month: undefined,
  monthCode: undefined,
  day: 18,
  timeZone: "+01:00"
}));

