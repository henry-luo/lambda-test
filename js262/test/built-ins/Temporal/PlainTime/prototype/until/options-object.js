

/*---
esid: sec-temporal.plaintime.prototype.until
description: Empty or a function object may be used as options
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const instance = new Temporal.PlainTime();

const result1 = instance.until(new Temporal.PlainTime(12, 34, 56), {});
TemporalHelpers.assertDuration(
  result1, 0, 0, 0, 0, 12, 34, 56, 0, 0, 0,
  "options may be an empty plain object"
);

const result2 = instance.until(new Temporal.PlainTime(12, 34, 56), () => {});
TemporalHelpers.assertDuration(
  result2, 0, 0, 0, 0, 12, 34, 56, 0, 0, 0,
  "options may be a function object"
);
