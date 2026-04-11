

/*---
esid: sec-get-temporal.zoneddatetime.prototype.month
description: Month property for ZonedDateTime
features: [Temporal]
---*/

assert.sameValue((new Temporal.ZonedDateTime(0n, "UTC")).month, 1);
