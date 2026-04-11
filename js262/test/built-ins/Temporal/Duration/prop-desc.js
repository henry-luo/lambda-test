

/*---
esid: sec-temporal.duration
description: The "Duration" property of Temporal
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.Duration,
  "function",
  "`typeof Duration` is `function`"
);

verifyProperty(Temporal, "Duration", {
  writable: true,
  enumerable: false,
  configurable: true,
});
