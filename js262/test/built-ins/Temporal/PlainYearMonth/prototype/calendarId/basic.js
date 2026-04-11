

/*---
esid: sec-temporal.plainyearmonth.prototype.calendarid
description: Basic functionality of calendarId property
features: [Temporal]
---*/

const instance = new Temporal.PlainYearMonth(2000, 3);
assert.sameValue(instance.calendarId, "iso8601");
