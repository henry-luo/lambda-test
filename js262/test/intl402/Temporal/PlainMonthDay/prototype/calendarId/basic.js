

/*---
esid: sec-temporal.plainmonthday.prototype.calendarid
description: Basic functionality of calendarId property
features: [Temporal]
---*/

const instance = new Temporal.PlainMonthDay(3, 6, "gregory", 1972);
assert.sameValue(instance.calendarId, "gregory");
