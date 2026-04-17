

/*---
esid: sec-get-temporal.plainmonthday.prototype.monthcode
description: There is no 'month' property on Temporal.PlainMonthDay
features: [Temporal]
---*/

const md = new Temporal.PlainMonthDay(1, 15);
assert.sameValue(md.month, undefined);
assert.sameValue("month" in md, false);
