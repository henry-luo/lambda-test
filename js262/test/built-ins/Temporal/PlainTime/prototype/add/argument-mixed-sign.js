

/*---
esid: sec-temporal.plaintime.prototype.add
description: Positive and negative values in the temporalDurationLike argument are not acceptable
features: [Temporal]
---*/

const instance = new Temporal.PlainTime(15, 30, 45, 987, 654, 321);

assert.throws(
  RangeError,
  () => instance.add({ hours: 1, minutes: -30 }),
  `mixed positive and negative values always throw`
);
