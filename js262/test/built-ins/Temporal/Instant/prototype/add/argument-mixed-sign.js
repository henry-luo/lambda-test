

/*---
esid: sec-temporal.instant.prototype.add
description: Positive and negative values in the temporalDurationLike argument are not acceptable
features: [Temporal]
---*/

const instance = new Temporal.Instant(1_000_000_000_000_000_000n);

assert.throws(
  RangeError,
  () => instance.add({ hours: 1, minutes: -30 }),
  `mixed positive and negative values always throw`
);
