

/*---
esid: sec-get-temporal.plainmonthday.prototype.monthcode
description: The "monthCode" property of Temporal.PlainMonthDay.prototype
features: [Temporal]
---*/

const descriptor = Object.getOwnPropertyDescriptor(Temporal.PlainMonthDay.prototype, "monthCode");
assert.sameValue(typeof descriptor.get, "function");
assert.sameValue(descriptor.set, undefined);
assert.sameValue(descriptor.enumerable, false);
assert.sameValue(descriptor.configurable, true);
