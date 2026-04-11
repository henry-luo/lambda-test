

/*---
esid: sec-temporal.plainyearmonth.prototype.erayear
description: Basic tests for eraYear property
features: [Temporal]
---*/

const instance = new Temporal.PlainYearMonth(2000, 3);
assert.sameValue(instance.eraYear, undefined);
