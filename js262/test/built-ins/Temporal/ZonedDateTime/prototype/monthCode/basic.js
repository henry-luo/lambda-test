

/*---
esid: sec-temporal.zoneddatetime.prototype.monthcode
description: monthCode property for ZonedDateTime
features: [Temporal]
---*/

assert.sameValue((new Temporal.ZonedDateTime(0n, "UTC")).monthCode, 'M01');
