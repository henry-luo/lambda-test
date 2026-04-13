

/*---
esid: sec-get-temporal.plaindatetime.prototype.inleapyear
description: Basic test for inLeapYear
features: [Temporal]
---*/

assert.sameValue((new Temporal.PlainDateTime(1976, 11, 18, 15, 23, 30, 123, 456, 789)).inLeapYear,
  true, "leap year");
assert.sameValue((new Temporal.PlainDateTime(1977, 11, 18, 15, 23, 30, 123, 456, 789)).inLeapYear,
  false, "non-leap year");
