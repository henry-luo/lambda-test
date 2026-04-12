

/*---
esid: sec-temporal.zoneddatetime.prototype.subtract
description: A non-integer value for any recognized property in the property bag, throws a RangeError
features: [Temporal]
---*/

const instance = new Temporal.ZonedDateTime(1_000_000_000_000_000_000n, "UTC");
const fields = [
  "years",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
  "milliseconds",
  "microseconds",
  "nanoseconds",
];
fields.forEach((field) => {
  assert.throws(RangeError, () => instance.subtract({ [field]: 1.5 }));
  assert.throws(RangeError, () => instance.subtract({ [field]: -1.5 }));
});
