

/*---
esid: sec-temporal.zoneddatetime.prototype.erayear
description: Basic tests for eraYear property
features: [Temporal, Intl.Era-monthcode]
---*/

const instance = new Temporal.ZonedDateTime(0n, "UTC", "gregory");
assert.sameValue(instance.eraYear, 1970);
