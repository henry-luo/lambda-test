

/*---
esid: sec-temporal.instant.compare
description: The "compare" property of Temporal.Instant
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.Instant.compare,
  "function",
  "`typeof Instant.compare` is `function`"
);

verifyProperty(Temporal.Instant, "compare", {
  writable: true,
  enumerable: false,
  configurable: true,
});
