

/*---
esid: sec-temporal.instant.prototype.tojson
description: The "toJSON" property of Temporal.Instant.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.Instant.prototype.toJSON,
  "function",
  "`typeof Instant.prototype.toJSON` is `function`"
);

verifyProperty(Temporal.Instant.prototype, "toJSON", {
  writable: true,
  enumerable: false,
  configurable: true,
});
