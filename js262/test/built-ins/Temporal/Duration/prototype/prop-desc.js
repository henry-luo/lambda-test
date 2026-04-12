

/*---
esid: sec-temporal.duration.prototype
description: The "prototype" property of Temporal.Duration
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(typeof Temporal.Duration.prototype, "object");
assert.notSameValue(Temporal.Duration.prototype, null);

verifyProperty(Temporal.Duration, "prototype", {
  writable: false,
  enumerable: false,
  configurable: false,
});
