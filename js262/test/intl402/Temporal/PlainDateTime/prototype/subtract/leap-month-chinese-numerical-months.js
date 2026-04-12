

/*---
esid: sec-temporal.plaindatetime.prototype.subtract
description: >
  Check mapping of numerical months across leap years. This catches bugs in
  implementations where numeric months are not correctly mapped across leap
  years, allowing subtractions that should throw with overflow reject.
  See https://github.com/tc39/test262/issues/4905
features: [Temporal]
---*/


const instance = Temporal.PlainDateTime.from({ calendar: "chinese", year: 2012, month: 5, day: 1 });

assert.throws(
  RangeError,
  () => instance.subtract("P1Y1M", { overflow: "reject" }),
  "Subtracting a year and a month to a numerical (leap) month."
);

const oneYear = new Temporal.Duration(1);
assert.throws(
  RangeError,
  () => instance.subtract(oneYear, { overflow: "reject" }),
  "Subtracting a year to a numerical (leap) month."
);
