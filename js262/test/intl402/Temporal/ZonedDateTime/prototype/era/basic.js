

/*---
esid: sec-temporal.zoneddatetime.prototype.era
description: Basic tests for era property
features: [Temporal, Intl.Era-monthcode]
---*/

const instance = new Temporal.ZonedDateTime(0n, "UTC", "gregory");
assert.sameValue(instance.era, "ce");
