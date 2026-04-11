

/*---
esid: sec-temporal.plaintime.prototype.add
description: A non-integer value for any recognized property in the property bag, throws a RangeError
features: [Temporal]
---*/

const instance = new Temporal.PlainTime(15, 30, 45, 987, 654, 321);
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
  assert.throws(RangeError, () => instance.add({ [field]: 1.5 }));
  assert.throws(RangeError, () => instance.add({ [field]: -1.5 }));
});
