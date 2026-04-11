

/*---
esid: sec-temporal.instant.prototype.add
description: The "add" property of Temporal.Instant.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.Instant.prototype.add,
  "function",
  "`typeof Instant.prototype.add` is `function`"
);

verifyProperty(Temporal.Instant.prototype, "add", {
  writable: true,
  enumerable: false,
  configurable: true,
});
