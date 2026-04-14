

/*---
esid: sec-temporal.duration.prototype.subtract
description: >
  BalanceDuration throws a RangeError when the result is too large.
features: [Temporal]
---*/


const duration1 = Temporal.Duration.from({seconds: Number.MAX_SAFE_INTEGER});
const duration2 = Temporal.Duration.from({seconds: -Number.MAX_SAFE_INTEGER});

assert.throws(RangeError, () => {
  duration1.subtract(duration2);
});
