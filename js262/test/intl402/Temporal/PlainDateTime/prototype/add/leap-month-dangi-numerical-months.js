

/*---
esid: sec-temporal.plaindatetime.prototype.add
description: >
  Check mapping of numerical months across leap years. This catches bugs in
  implementations where numeric months are not correctly mapped across leap
  years, allowing additions that should throw with overflow reject.
  See https://github.com/tc39/test262/issues/4905
features: [Temporal]
---*/


const instance = Temporal.PlainDateTime.from({ calendar: "dangi", year: 2012, month: 4, day: 1 });

assert.throws(
  RangeError,
  () => instance.add("P1Y1M", { overflow: "reject" }),
  "Adding a year and a month to a numerical (leap) month."
);

const oneYear = new Temporal.Duration(1);
assert.throws(
  RangeError,
  () => instance.add(oneYear, { overflow: "reject" }),
  "Adding a year to a numerical (leap) month."
);
