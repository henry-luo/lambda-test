

/*---
esid: sec-get-temporal.plaindate.prototype.monthsinyear
description: The "monthsInYear" property of Temporal.PlainDate.prototype
features: [Temporal]
---*/

const descriptor = Object.getOwnPropertyDescriptor(Temporal.PlainDate.prototype, "monthsInYear");
assert.sameValue(typeof descriptor.get, "function");
assert.sameValue(descriptor.set, undefined);
assert.sameValue(descriptor.enumerable, false);
assert.sameValue(descriptor.configurable, true);
