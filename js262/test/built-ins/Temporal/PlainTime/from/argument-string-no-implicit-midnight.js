

/*---
esid: sec-temporal.plaintime.from
description: RangeError thrown if a date-only string is passed in a PlainTime context
features: [Temporal, arrow-function]
---*/

const arg = "2019-10-01";
assert.throws(
  RangeError,
  () => Temporal.PlainTime.from(arg),
  "Date-only string throws, does not implicitly convert to midnight"
);
