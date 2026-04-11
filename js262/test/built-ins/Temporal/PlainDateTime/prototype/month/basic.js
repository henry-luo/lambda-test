

/*---
esid: sec-get-temporal.plaindate.prototype.month
description: Month property for PlainDateTime
features: [Temporal]
---*/

assert.sameValue((new Temporal.PlainDateTime(1997, 8, 23, 5, 30, 13)).month, 8);
