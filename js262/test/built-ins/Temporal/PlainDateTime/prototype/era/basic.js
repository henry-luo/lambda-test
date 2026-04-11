

/*---
esid: sec-temporal.plaindatetime.prototype.era
description: Basic tests for era property
features: [Temporal]
---*/

const instance = new Temporal.PlainDateTime(2000, 3, 6, 12, 34, 56, 567, 234, 123);
assert.sameValue(instance.era, undefined);
