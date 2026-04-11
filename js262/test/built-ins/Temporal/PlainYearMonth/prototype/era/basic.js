

/*---
esid: sec-temporal.plainyearmonth.prototype.era
description: Basic tests for era property
features: [Temporal]
---*/

const instance = new Temporal.PlainYearMonth(2000, 3);
assert.sameValue(instance.era, undefined);
