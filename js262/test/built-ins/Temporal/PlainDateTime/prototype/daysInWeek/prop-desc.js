

/*---
esid: sec-get-temporal.plaindatetime.prototype.daysinweek
description: The "daysInWeek" property of Temporal.PlainDateTime.prototype
features: [Temporal]
---*/

const descriptor = Object.getOwnPropertyDescriptor(Temporal.PlainDateTime.prototype, "daysInWeek");
assert.sameValue(typeof descriptor.get, "function");
assert.sameValue(descriptor.set, undefined);
assert.sameValue(descriptor.enumerable, false);
assert.sameValue(descriptor.configurable, true);
