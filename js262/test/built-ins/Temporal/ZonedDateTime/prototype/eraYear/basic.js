

/*---
esid: sec-temporal.zoneddatetime.prototype.erayear
description: Basic tests for eraYear property
features: [Temporal]
---*/

const instance = new Temporal.ZonedDateTime(0n, "UTC");
assert.sameValue(instance.eraYear, undefined);
