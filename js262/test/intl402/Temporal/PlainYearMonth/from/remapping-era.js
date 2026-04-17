

/*---
esid: sec-temporal.plainyearmonth.from
description: Test remapping behaviour of regnal eras
info: |
  CalendarYearMonthFromFields:
  1. Perform ? CalendarResolveFields(_calendar_, _fields_, ~year-month~).
  2. Let _firstDayIndex_ be the 1-based index of the first day of the month
     described by _fields_ (i.e., 1 unless the month's first day is skipped by
     this calendar.)
  3. Set _fields_.[[Day]] to _firstDayIndex_.
  4. Let result be ? CalendarDateToISO(_calendar_, _fields_, _overflow_).

  CalendarResolveFields:
  When the fields of _fields_ are inconsistent with respect to a non-unset
  _fields_.[[Era]], it is recommended that _fields_.[[Era]] and
  _fields_.[[EraYear]] be updated to resolve the inconsistency by lenient
  interpretation of out-of-bounds values (rather than throwing a *RangeError*),
  which is particularly useful for consistent interpretation of dates in
  calendars with regnal eras.

includes: [temporalHelpers.js]
features: [Temporal]
---*/


for (const overflow of ["constrain", "reject"]) {
  function test(fields) {
    return Temporal.PlainYearMonth.from({ ...fields, calendar: "japanese" }, { overflow });
  }

  
  TemporalHelpers.assertPlainYearMonth(
    test({ era: "reiwa", eraYear: 1, monthCode: "M01" }),
    2019, 1, "M01",
    "Reiwa 1 before May is mapped to Heisei 31",
    "heisei", 31,  1
  );

  
  TemporalHelpers.assertPlainYearMonth(
    test({ era: "reiwa", eraYear: 1, monthCode: "M05" }),
    2019, 5, "M05",
    "reference day is 1",
    "reiwa", 1,  1
  );

  
  TemporalHelpers.assertPlainYearMonth(
    test({ era: "heisei", eraYear: 1, monthCode: "M01" }),
    1989, 1, "M01",
    "01-01 Heisei 1 is remapped to 01-01 Showa 64",
    "showa", 64,  1
  );

  
  TemporalHelpers.assertPlainYearMonth(
    test({ era: "heisei", eraYear: 37, monthCode: "M04" }),
    2025, 4, "M04",
    "Heisei 37 is remapped to Reiwa 7",
    "reiwa", 7,  1
  );

  
  TemporalHelpers.assertPlainYearMonth(
    test({ era: "reiwa", eraYear: 0, monthCode: "M04" }),
    2018, 4, "M04",
    "Reiwa 0 is remapped to Heisei 30",
    "heisei", 30,  1
  );

  
  TemporalHelpers.assertPlainYearMonth(
    test({ era: "reiwa", eraYear: -20, monthCode: "M04" }),
    1998, 4, "M04",
    "Reiwa -20 is remapped to Heisei 10",
    "heisei", 10,  1
  );

  
  function testGregorian(fields) {
    return Temporal.PlainYearMonth.from({ ...fields, calendar: "gregory" }, { overflow });
  }
  TemporalHelpers.assertPlainYearMonth(
    testGregorian({ era: "ce", eraYear: 0, monthCode: "M04" }),
    0, 4, "M04",
    "0 CE is remapped to 1 BCE",
    "bce", 1,  1
  );
  TemporalHelpers.assertPlainYearMonth(
    testGregorian({ era: "ce", eraYear: -20, monthCode: "M04" }),
    -20, 4, "M04",
    "-20 CE is remapped to 21 BCE",
    "bce", 21,  1
  );

  
  TemporalHelpers.assertPlainYearMonth(
    testGregorian({ era: "bce", eraYear: 0, monthCode: "M04" }),
    1, 4, "M04",
    "0 BCE is remapped to 1 CE",
    "ce", 1,  1
  );

  
  TemporalHelpers.assertPlainYearMonth(
    testGregorian({ era: "bce", eraYear: -20, monthCode: "M04" }),
    21, 4, "M04",
    "-20 BCE is remapped to 21 CE",
    "ce", 21,  1
  );
}
