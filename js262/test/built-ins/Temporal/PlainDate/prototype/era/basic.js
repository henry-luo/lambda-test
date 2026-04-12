

/*---
esid: sec-temporal.plaindatet.prototype.era
description: Basic tests for era property
features: [Temporal]
---*/

const instance = new Temporal.PlainDate(2000, 3, 6);
assert.sameValue(instance.era, undefined);
