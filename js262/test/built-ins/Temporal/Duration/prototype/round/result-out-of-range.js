

/*---
esid: sec-temporal.duration.prototype.round
description: >
  RoundDuration throws a RangeError when the result duration is invalid.
features: [Temporal]
---*/

const duration = Temporal.Duration.from({
  seconds: Number.MAX_SAFE_INTEGER,
  nanoseconds: 999_999_999,
});

assert.throws(RangeError, () => duration.round({smallestUnit: "seconds"}), "result is out of range");
