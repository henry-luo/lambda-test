

/*---
esid: sec-get-temporal.plainmonthday.prototype.day
description: Basic tests for day().
features: [Temporal]
---*/

const md = new Temporal.PlainMonthDay(1, 15);
assert.sameValue(md.day, 15);
