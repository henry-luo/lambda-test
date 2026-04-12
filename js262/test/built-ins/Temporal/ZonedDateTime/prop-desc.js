

/*---
esid: sec-temporal.zoneddatetime
description: The "ZonedDateTime" property of Temporal
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.ZonedDateTime,
  "function",
  "`typeof ZonedDateTime` is `function`"
);

verifyProperty(Temporal, "ZonedDateTime", {
  writable: true,
  enumerable: false,
  configurable: true,
});
