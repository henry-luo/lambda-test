

/*---
esid: sec-temporal.plainyearmonth.from
description: CalendarResolveFields throws TypeError before RangeError (gregory calendar)
info: |
  CalendarResolveFields validates field types before validating field ranges,
  ensuring TypeError is thrown before RangeError when both conditions exist.
features: [Temporal, Intl.Era-monthcode]
---*/


assert.throws(
  TypeError,
  () => Temporal.PlainYearMonth.from({ calendar: "gregory", monthCode: "M05", month: 6 }),
  "Missing year/era throws TypeError before month/monthCode conflict throws RangeError"
);


assert.throws(
  TypeError,
  () => Temporal.PlainYearMonth.from({ calendar: "gregory", year: undefined, monthCode: "M05", month: 6 }),
  "undefined year throws TypeError before month/monthCode conflict throws RangeError"
);


assert.throws(
  RangeError,
  () => Temporal.PlainYearMonth.from({ calendar: "gregory", year: 2020, monthCode: "M05", month: 6 }),
  "month/monthCode conflict throws RangeError when all types are valid"
);
