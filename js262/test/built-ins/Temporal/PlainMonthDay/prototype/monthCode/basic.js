

/*---
esid: sec-get-temporal.plainmonthday.prototype.monthcode
description: Basic tests for monthCode().
features: [Temporal]
---*/

const md = new Temporal.PlainMonthDay(1, 15);
assert.sameValue(md.monthCode, "M01");
