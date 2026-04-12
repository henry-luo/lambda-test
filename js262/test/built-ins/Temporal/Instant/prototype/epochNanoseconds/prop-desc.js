

/*---
esid: sec-get-temporal.instant.prototype.epochnanoseconds
description: The "epochNanoseconds" property of Temporal.Instant.prototype
features: [Temporal]
---*/

const descriptor = Object.getOwnPropertyDescriptor(Temporal.Instant.prototype, "epochNanoseconds");
assert.sameValue(typeof descriptor.get, "function");
assert.sameValue(descriptor.set, undefined);
assert.sameValue(descriptor.enumerable, false);
assert.sameValue(descriptor.configurable, true);
