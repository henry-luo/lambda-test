

/*---
esid: sec-temporal.zoneddatetime.prototype.calendarid
description: Basic functionality of calendarId property
features: [Temporal]
---*/

const instance = new Temporal.ZonedDateTime(0n, "Europe/Madrid", "gregory");
assert.sameValue(instance.calendarId, "gregory");
