

/*---
esid: sec-temporal.zoneddatetime.from
description: CalendarResolveFields throws TypeError before RangeError (chinese calendar)
info: |
  CalendarResolveFields validates field types before validating field ranges,
  ensuring TypeError is thrown before RangeError when both conditions exist.
features: [Temporal, Intl.Era-monthcode]
---*/


assert.throws(
  TypeError,
  () => Temporal.ZonedDateTime.from({ calendar: "chinese", monthCode: "M05", month: 6, day: 1, timeZone: "UTC" }),
  "Missing year throws TypeError before month/monthCode conflict throws RangeError"
);


assert.throws(
  TypeError,
  () => Temporal.ZonedDateTime.from({ calendar: "chinese", year: 2020, day: 32, timeZone: "UTC" }, { overflow: "reject" }),
  "Missing month throws TypeError before out-of-range day throws RangeError"
);


assert.throws(
  TypeError,
  () => Temporal.ZonedDateTime.from({ calendar: "chinese", year: 2020, monthCode: "M05", month: 6, timeZone: "UTC" }),
  "Missing day throws TypeError before month/monthCode conflict throws RangeError"
);


assert.throws(
  TypeError,
  () => Temporal.ZonedDateTime.from({ calendar: "chinese", year: undefined, monthCode: "M05", month: 6, day: 1, timeZone: "UTC" }),
  "undefined year throws TypeError before month/monthCode conflict throws RangeError"
);


assert.throws(
  RangeError,
  () => Temporal.ZonedDateTime.from({ calendar: "chinese", year: 2020, monthCode: "M05", month: 12, day: 1, timeZone: "UTC" }),
  "month/monthCode conflict throws RangeError when all types are valid"
);

assert.throws(
  RangeError,
  () => Temporal.ZonedDateTime.from({ calendar: "chinese", year: 2020, month: 1, day: 32, timeZone: "UTC" }, { overflow: "reject" }),
  "Out-of-range day throws RangeError when all types are valid"
);
