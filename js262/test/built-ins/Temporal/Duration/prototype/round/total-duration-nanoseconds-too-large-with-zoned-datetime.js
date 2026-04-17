

/*---
esid: sec-temporal.duration.prototype.round
description: >
  NanosecondsToDays throws a RangeError when the number of nanoseconds is too large.
features: [Temporal]
---*/

var duration = Temporal.Duration.from({
  seconds: Number.MAX_SAFE_INTEGER,
});

var zonedDateTime = new Temporal.ZonedDateTime(0n, "UTC");

var options = {
  smallestUnit: "day",
  largestUnit: "day",
  relativeTo: zonedDateTime,
};

assert.throws(RangeError, () => duration.round(options));
