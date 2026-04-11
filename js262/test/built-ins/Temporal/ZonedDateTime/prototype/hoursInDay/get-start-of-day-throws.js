

/*---
esid: sec-temporal.zoneddatetime.prototype.hoursinday
description: >
  GetStartOfDay throws a RangeError for values outside the valid limits.
info: |
  get Temporal.ZonedDateTime.prototype.hoursInDay

  ...
  7. Let todayNs be ? GetStartOfDay(timeZone, today).
  8. Let tomorrowNs be ? GetStartOfDay(timeZone, tomorrow).
  ...
features: [Temporal]
---*/

var zdt;


zdt = new Temporal.ZonedDateTime(-864n * 10n**19n, "-01");
assert.throws(RangeError, () => zdt.hoursInDay);


zdt = new Temporal.ZonedDateTime(-864n * 10n**19n, "+01");
assert.throws(RangeError, () => zdt.hoursInDay);


zdt = new Temporal.ZonedDateTime(864n * 10n**19n, "-01");
assert.throws(RangeError, () => zdt.hoursInDay);
