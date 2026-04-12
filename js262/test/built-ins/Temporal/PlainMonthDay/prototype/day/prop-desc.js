

/*---
esid: sec-get-temporal.plainmonthday.prototype.day
description: The "day" property of Temporal.PlainMonthDay.prototype
features: [Temporal]
---*/

const descriptor = Object.getOwnPropertyDescriptor(Temporal.PlainMonthDay.prototype, "day");
assert.sameValue(typeof descriptor.get, "function");
assert.sameValue(descriptor.set, undefined);
assert.sameValue(descriptor.enumerable, false);
assert.sameValue(descriptor.configurable, true);
