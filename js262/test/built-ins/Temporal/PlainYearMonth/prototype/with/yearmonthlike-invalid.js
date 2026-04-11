

/*---
esid: sec-temporal.plainyearmonth.prototype.with
description: >
  Throws TypeError on an argument that is not a PlainYearMonth-like property bag
info: |
  Temporal.PlainYearMonth.prototype.with ( temporalYearMonthLike [ , options ] )

  ...
  3. If ? IsPartialTemporalObject(temporalYearMonthLike) is false, throw a TypeError exception.
  ...
  6. Let partialYearMonth be ? PrepareCalendarFields(calendar, temporalYearMonthLike, « year, month, month-code », « », partial).
  ...
features: [Temporal]
---*/

const plainYearMonth = new Temporal.PlainYearMonth(1, 1);

const tests = [
  
  
  [undefined],
  [null],
  [true],
  ["2019-05-17"],
  ["2019-05-17T12:34"],
  ["2019-05-17T12:34Z"],
  ["18:05:42.577"],
  ["42"],
  [Symbol(), "symbol"],
  [42, "number"],
  [42n, "bigint"],

  
  [Temporal.PlainDate.from("2019-05-17"), "PlainDate"],
  [Temporal.PlainDateTime.from("2019-05-17T12:34"), "PlainDateTime"],
  [Temporal.PlainMonthDay.from("2019-05-17"), "PlainMonthDay"],
  [Temporal.PlainTime.from("12:34"), "PlainTime"],
  [Temporal.PlainYearMonth.from("2019-05-17"), "PlainYearMonth"],
  [Temporal.ZonedDateTime.from("2019-05-17T12:34Z[UTC]"), "ZonedDateTime"],

  
  [{ year: 2021, calendar: "iso8601" }, "calendar"],

  
  [{ year: 2021, timeZone: "UTC" }, "timeZone"],

  
  [{}, "empty object"],
  [{ months: 12 }, "only plural property"],
];

for (const [value, message = String(value)] of tests) {
  assert.throws(TypeError, () => plainYearMonth.with(value), message);
}
