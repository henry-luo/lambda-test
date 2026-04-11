

/*---
esid: sec-temporal.plaindate.prototype.add
description: Positive and negative values in the temporalDurationLike argument are not acceptable
features: [Temporal]
---*/

const instance = new Temporal.PlainDate(2000, 5, 2);

["constrain", "reject"].forEach((overflow) => {
  assert.throws(
    RangeError,
    () => instance.add({ hours: 1, minutes: -30 }, { overflow }),
    `mixed positive and negative values always throw (overflow = "${overflow}")`
  );
});
