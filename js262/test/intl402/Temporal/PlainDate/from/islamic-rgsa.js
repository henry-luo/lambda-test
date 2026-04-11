

/*---
esid: sec-temporal.plaindate.prototype.from
description: islamic-rgsa calendar name is not supported
features: [Temporal, Intl.Era-monthcode]
---*/

const calendar = "islamic-rgsa";

assert.throws(RangeError, () =>
  Temporal.PlainDate.from({year: 1500, month: 1, day: 1, calendar}),
  "fallback for calendar ID 'islamic-rgsa' only supported in Intl.DateTimeFormat constructor, not Temporal"
);
