

/*---
esid: sec-temporal.plaindatetime.prototype.calendarid
description: Basic functionality of calendarId property
features: [Temporal]
---*/

const instance = new Temporal.PlainDateTime(2000, 3, 6, 12, 45, 22, 768, 234, 899);
assert.sameValue(instance.calendarId, "iso8601");
