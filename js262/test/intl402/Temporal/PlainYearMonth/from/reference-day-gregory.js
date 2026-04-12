

/*---
esid: sec-temporal.calendar.prototype.yearmonthfromfields
description: Reference ISO day is chosen to be the first of the calendar month
info: |
  6.d. Perform ! CreateDataPropertyOrThrow(_fields_, *"day"*, *1*<sub>𝔽</sub>).
    e. Let _result_ be ? CalendarDateToISO(_calendar_.[[Identifier]], _fields_, _options_).
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const result1 = Temporal.PlainYearMonth.from({ year: 2023, monthCode: "M01", day: 13, calendar: "gregory" });
TemporalHelpers.assertPlainYearMonth(
  result1,
  2023, 1, "M01",
  "reference day is 1 even if day is given",
  "ce", 2023,  1
);

const result2 = Temporal.PlainYearMonth.from({ year: 2021, monthCode: "M02", day: 50, calendar: "gregory" }, { overflow: "constrain" });
TemporalHelpers.assertPlainYearMonth(
  result2,
  2021, 2, "M02",
  "reference day is set correctly even if day is out of range (overflow constrain)",
  "ce", 2021,  1
);

const result3 = Temporal.PlainYearMonth.from({ year: 2021, monthCode: "M02", day: 50, calendar: "gregory" }, { overflow: "reject" });
TemporalHelpers.assertPlainYearMonth(
  result3,
  2021, 2, "M02",
  "reference day is set correctly even if day is out of range (overflow reject)",
  "ce", 2021,  1
);
