

/*---
esid: sec-temporal.duration.prototype.add
description: >
  BalanceDuration throws a RangeError when the result is too large.
features: [Temporal]
---*/


const duration = Temporal.Duration.from({seconds: Number.MAX_SAFE_INTEGER});

assert.throws(RangeError, () => {
  duration.add(duration);
});
