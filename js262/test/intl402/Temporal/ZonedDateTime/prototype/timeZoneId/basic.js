

/*---
esid: sec-temporal.zoneddatetime.prototype.timezoneid
description: Basic functionality of timeZoneId property
features: [Temporal]
---*/

const instance = new Temporal.ZonedDateTime(0n, "Europe/Madrid", "gregory");
assert.sameValue(instance.timeZoneId, "Europe/Madrid");
