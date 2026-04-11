

/*---
esid: sec-get-temporal.plaindate.prototype.month
description: Month property for PlainDate
features: [Temporal]
---*/

assert.sameValue((new Temporal.PlainDate(2021, 7, 15)).month, 7);
assert.sameValue(Temporal.PlainDate.from('2019-03-15').month, 3);
