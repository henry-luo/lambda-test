

/*---
esid: sec-temporal.plainyearmonth.from
description: CalendarResolveFields throws TypeError before RangeError
info: |
  CalendarResolveFields validates field types before validating field ranges,
  ensuring TypeError is thrown before RangeError when both conditions exist.
features: [Temporal]
---*/


assert.throws(
  TypeError,
  () => Temporal.PlainYearMonth.from({ monthCode: "M99L" }),
  "Missing year throws TypeError before invalid monthCode throws RangeError"
);


assert.throws(
  TypeError,
  () => Temporal.PlainYearMonth.from({ year: 2021 }),
  "Missing month/monthCode throws TypeError"
);


assert.throws(
  RangeError,
  () => Temporal.PlainYearMonth.from({ year: 2021, monthCode: "M99L" }),
  "Invalid monthCode throws RangeError when all types are valid"
);

assert.throws(
  RangeError,
  () => Temporal.PlainYearMonth.from({ year: 2021, month: 11, monthCode: "M12" }),
  "Conflicting month/monthCode throws RangeError when all types are valid"
);

assert.throws(
  RangeError,
  () => Temporal.PlainYearMonth.from({ year: 2021, month: 13 }, { overflow: "reject" }),
  "Out-of-range month throws RangeError when all types are valid"
);

assert.throws(
  RangeError,
  () => Temporal.PlainYearMonth.from({ year: 2021, monthCode: "M00" }),
  "Invalid monthCode M00 throws RangeError when all types are valid"
);
