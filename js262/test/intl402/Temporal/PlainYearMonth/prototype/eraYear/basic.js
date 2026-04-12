

/*---
esid: sec-temporal.plainyearmonth.prototype.erayear
description: Basic tests for eraYear property
features: [Temporal, Intl.Era-monthcode]
---*/

const instance = new Temporal.PlainYearMonth(2000, 3, "gregory", 1);
assert.sameValue(instance.eraYear, 2000);
