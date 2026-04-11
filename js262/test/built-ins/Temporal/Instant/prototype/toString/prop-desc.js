

/*---
esid: sec-temporal.instant.prototype.tostring
description: The "toString" property of Temporal.Instant.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.Instant.prototype.toString,
  "function",
  "`typeof Instant.prototype.toString` is `function`"
);

verifyProperty(Temporal.Instant.prototype, "toString", {
  writable: true,
  enumerable: false,
  configurable: true,
});
