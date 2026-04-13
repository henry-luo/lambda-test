

/*---
esid: sec-get-temporal.zoneddatetime.prototype.inleapyear
description: Basic test for inLeapYear
features: [Temporal]
---*/

assert.sameValue((new Temporal.ZonedDateTime(217178610123456789n, "UTC")).inLeapYear,
  true, "leap year");
assert.sameValue((new Temporal.ZonedDateTime(248714610123456789n, "UTC")).inLeapYear,
  false, "non-leap year");
