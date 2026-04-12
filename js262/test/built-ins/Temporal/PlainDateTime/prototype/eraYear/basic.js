

/*---
esid: sec-temporal.plaindatetime.prototype.erayear
description: Basic tests for eraYear property
features: [Temporal]
---*/

const instance = new Temporal.PlainDateTime(2000, 3, 6, 12, 34, 56, 345, 213, 751);
assert.sameValue(instance.eraYear, undefined);
