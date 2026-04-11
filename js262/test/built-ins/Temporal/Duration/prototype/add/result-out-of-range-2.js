

/*---
esid: sec-temporal.duration.prototype.add
description: >
  BalanceDuration throws a RangeError when the result is too large.
features: [Temporal]
---*/


var duration = Temporal.Duration.from({days: 104249991374});

assert.throws(RangeError, () => duration.add(duration));
