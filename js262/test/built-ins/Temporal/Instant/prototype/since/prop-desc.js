

/*---
esid: sec-temporal.instant.prototype.since
description: The "since" property of Temporal.Instant.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.Instant.prototype.since,
  "function",
  "`typeof Instant.prototype.since` is `function`"
);

verifyProperty(Temporal.Instant.prototype, "since", {
  writable: true,
  enumerable: false,
  configurable: true,
});
