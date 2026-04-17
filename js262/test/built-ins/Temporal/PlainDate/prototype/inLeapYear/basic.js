

/*---
esid: sec-get-temporal.plaindate.prototype.inleapyear
description: Basic test for inLeapYear
features: [Temporal]
---*/

assert.sameValue((new Temporal.PlainDate(1976, 11, 18)).inLeapYear,
  true, "leap year");
assert.sameValue((new Temporal.PlainDate(1977, 11, 18)).inLeapYear,
  false, "non-leap year");
