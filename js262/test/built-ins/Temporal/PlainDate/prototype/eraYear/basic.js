

/*---
esid: sec-temporal.plaindate.prototype.erayear
description: Basic tests for eraYear property
features: [Temporal]
---*/

const instance = new Temporal.PlainDate(2000, 3, 6);
assert.sameValue(instance.eraYear, undefined);
