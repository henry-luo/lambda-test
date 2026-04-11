

/*---
esid: sec-temporal.instant
description: >
  Throws a RangeError if the input is far away from the epoch nanoseconds limits.
features: [Temporal]
---*/

assert.throws(
  RangeError,
  () => new Temporal.Instant(2n ** 128n),
  "2n ** 128n"
);

assert.throws(
  RangeError,
  () => new Temporal.Instant(-(2n ** 128n)),
  "-(2n ** 128n)"
);
