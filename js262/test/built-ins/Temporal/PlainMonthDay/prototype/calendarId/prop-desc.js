

/*---
esid: sec-get-temporal.plainmonthday.prototype.calendarid
description: The "calendarId" property of Temporal.PlainMonthDay.prototype
features: [Temporal]
---*/

const descriptor = Object.getOwnPropertyDescriptor(Temporal.PlainMonthDay.prototype, "calendarId");
assert.sameValue(typeof descriptor.get, "function");
assert.sameValue(descriptor.set, undefined);
assert.sameValue(descriptor.enumerable, false);
assert.sameValue(descriptor.configurable, true);
