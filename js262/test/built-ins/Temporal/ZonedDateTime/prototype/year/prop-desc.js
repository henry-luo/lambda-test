

/*---
esid: sec-get-temporal.zoneddatetime.prototype.year
description: The "year" property of Temporal.ZonedDateTime.prototype
features: [Temporal]
---*/

const descriptor = Object.getOwnPropertyDescriptor(Temporal.ZonedDateTime.prototype, "year");
assert.sameValue(typeof descriptor.get, "function");
assert.sameValue(descriptor.set, undefined);
assert.sameValue(descriptor.enumerable, false);
assert.sameValue(descriptor.configurable, true);
