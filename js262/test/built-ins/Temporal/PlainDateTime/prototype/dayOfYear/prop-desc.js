

/*---
esid: sec-get-temporal.plaindatetime.prototype.dayofyear
description: The "dayOfYear" property of Temporal.PlainDateTime.prototype
features: [Temporal]
---*/

const descriptor = Object.getOwnPropertyDescriptor(Temporal.PlainDateTime.prototype, "dayOfYear");
assert.sameValue(typeof descriptor.get, "function");
assert.sameValue(descriptor.set, undefined);
assert.sameValue(descriptor.enumerable, false);
assert.sameValue(descriptor.configurable, true);
