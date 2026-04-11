

/*---
esid: sec-temporal.duration.prototype.subtract
description: >
  BalanceDuration throws a RangeError when the result is too large.
features: [Temporal]
---*/


var duration1 = Temporal.Duration.from({days: 104249991374});
var duration2 = Temporal.Duration.from({days: -104249991374});

assert.throws(RangeError, () => duration1.subtract(duration2));
