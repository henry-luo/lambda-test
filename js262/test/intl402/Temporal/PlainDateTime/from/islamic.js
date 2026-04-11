

/*---
esid: sec-temporal.plaindatetime.prototype.from
description: islamic calendar name is not supported
features: [Temporal, Intl.Era-monthcode]
---*/

const calendar = "islamic";

assert.throws(RangeError, () =>
  Temporal.PlainDateTime.from({year: 1500, month: 1, day: 1, calendar}),
  "fallback for calendar ID 'islamic' only supported in Intl.DateTimeFormat constructor, not Temporal"
);
