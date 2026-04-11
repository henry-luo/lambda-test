

/*---
esid: sec-get-temporal.plaindatetime.prototype.microsecond
description: The "microsecond" property of Temporal.PlainDateTime.prototype
features: [Temporal]
---*/

const descriptor = Object.getOwnPropertyDescriptor(Temporal.PlainDateTime.prototype, "microsecond");
assert.sameValue(typeof descriptor.get, "function");
assert.sameValue(descriptor.set, undefined);
assert.sameValue(descriptor.enumerable, false);
assert.sameValue(descriptor.configurable, true);
