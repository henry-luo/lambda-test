

/*---
esid: sec-temporal.duration.compare
description: The "compare" property of Temporal.Duration
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.Duration.compare,
  "function",
  "`typeof Duration.compare` is `function`"
);

verifyProperty(Temporal.Duration, "compare", {
  writable: true,
  enumerable: false,
  configurable: true,
});
