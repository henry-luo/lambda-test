

/*---
esid: sec-temporal.plaindatetime.from
description: CalendarResolveFields throws TypeError before RangeError
info: |
  CalendarResolveFields validates field types before validating field ranges,
  ensuring TypeError is thrown before RangeError when both conditions exist.
features: [Temporal]
---*/


assert.throws(
  TypeError,
  () => Temporal.PlainDateTime.from({ monthCode: "M99L", day: 1, hour: 12 }),
  "Missing year throws TypeError before invalid monthCode throws RangeError"
);


assert.throws(
  TypeError,
  () => Temporal.PlainDateTime.from({ year: 2021, day: 32, hour: 12 }, { overflow: "reject" }),
  "Missing month throws TypeError before out-of-range day throws RangeError"
);


assert.throws(
  TypeError,
  () => Temporal.PlainDateTime.from({ year: 2021, monthCode: "M99L", hour: 12 }),
  "Missing day throws TypeError before invalid monthCode throws RangeError"
);


assert.throws(
  RangeError,
  () => Temporal.PlainDateTime.from({ year: 2021, monthCode: "M99L", day: 1, hour: 12 }),
  "Invalid monthCode throws RangeError when all types are valid"
);

assert.throws(
  RangeError,
  () => Temporal.PlainDateTime.from({ year: 2021, month: 11, monthCode: "M12", day: 18, hour: 12 }),
  "Conflicting month/monthCode throws RangeError when all types are valid"
);

assert.throws(
  RangeError,
  () => Temporal.PlainDateTime.from({ year: 2021, month: 1, day: 32, hour: 12 }, { overflow: "reject" }),
  "Out-of-range day throws RangeError when all types are valid"
);
