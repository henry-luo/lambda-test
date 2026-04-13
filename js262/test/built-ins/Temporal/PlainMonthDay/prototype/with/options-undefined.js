

/*---
esid: sec-temporal.plainmonthday.prototype.with
description: Verify that undefined options are handled correctly.
features: [Temporal]
---*/

const monthday = new Temporal.PlainMonthDay(2, 2);
const fields = { day: 100 };

const explicit = monthday.with(fields, undefined);
assert.sameValue(explicit.day, 29, "default overflow is constrain");

const implicit = monthday.with(fields);
assert.sameValue(implicit.day, 29, "default overflow is constrain");
