

/*---
esid: sec-temporal.plaindatetime.prototype.erayear
description: Basic tests for eraYear property
features: [Temporal, Intl.Era-monthcode]
---*/

const instance = new Temporal.PlainDateTime(2000, 3, 6, 12, 34, 56, 234, 563, 734, "gregory");
assert.sameValue(instance.eraYear, 2000);
