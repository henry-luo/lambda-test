

/*---
esid: sec-get-temporal.plainyearmonth.prototype.monthsinyear
description: The "monthsInYear" property of Temporal.PlainYearMonth.prototype
features: [Temporal]
---*/

const descriptor = Object.getOwnPropertyDescriptor(Temporal.PlainYearMonth.prototype, "monthsInYear");
assert.sameValue(typeof descriptor.get, "function");
assert.sameValue(descriptor.set, undefined);
assert.sameValue(descriptor.enumerable, false);
assert.sameValue(descriptor.configurable, true);
