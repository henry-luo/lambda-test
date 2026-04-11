

/*---
esid: sec-temporal.plaindate.prototype.calendarid
description: Basic functionality of calendarId property
features: [Temporal]
---*/

const instance = new Temporal.PlainDate(2000, 3, 6, "gregory");
assert.sameValue(instance.calendarId, "gregory");
