

/*---
esid: sec-temporal.instant.fromepochmilliseconds
description: The "fromEpochMilliseconds" property of Temporal.Instant
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.Instant.fromEpochMilliseconds,
  "function",
  "`typeof Instant.fromEpochMilliseconds` is `function`"
);

verifyProperty(Temporal.Instant, "fromEpochMilliseconds", {
  writable: true,
  enumerable: false,
  configurable: true,
});
