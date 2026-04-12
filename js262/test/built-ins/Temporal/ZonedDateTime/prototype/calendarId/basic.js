

/*---
esid: sec-temporal.zoneddatetime.prototype.calendarid
description: Basic functionality of calendarId property
features: [Temporal]
---*/

const instance = new Temporal.ZonedDateTime(0n, "UTC");
assert.sameValue(instance.calendarId, "iso8601");
