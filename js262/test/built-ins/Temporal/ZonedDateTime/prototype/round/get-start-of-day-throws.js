

/*---
esid: sec-temporal.zoneddatetime.prototype.round
description: >
  GetStartOfDay throws a RangeError for values outside the valid limits.
info: |
  Temporal.ZonedDateTime.prototype.round ( roundTo )

  ...
  18. If smallestUnit is day, then
    ...
    c. Let startNs be ? GetStartOfDay(timeZone, dateStart).
    ...
    e. Let endNs be ? GetStartOfDay(timeZone, dateEnd).
    ...
features: [Temporal]
---*/

var roundTo = {smallestUnit: "days"};

var zdt;


zdt = new Temporal.ZonedDateTime(-864n * 10n**19n, "-01");
assert.throws(RangeError, () => zdt.round(roundTo));


zdt = new Temporal.ZonedDateTime(-864n * 10n**19n, "+01");
assert.throws(RangeError, () => zdt.round(roundTo));


zdt = new Temporal.ZonedDateTime(864n * 10n**19n, "-01");
assert.throws(RangeError, () => zdt.round(roundTo));


zdt = new Temporal.ZonedDateTime(864n * 10n**19n, "+00");
assert.throws(RangeError, () => zdt.round(roundTo));


zdt = new Temporal.ZonedDateTime(864n * 10n**19n, "+01");
assert.throws(RangeError, () => zdt.round(roundTo));
