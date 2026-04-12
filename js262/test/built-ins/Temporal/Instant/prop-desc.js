

/*---
esid: sec-temporal.instant
description: The "Instant" property of Temporal
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.Instant,
  "function",
  "`typeof Instant` is `function`"
);

verifyProperty(Temporal, "Instant", {
  writable: true,
  enumerable: false,
  configurable: true,
});
