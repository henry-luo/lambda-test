

/*---
esid: sec-temporal.zoneddatetime.prototype.round
description: The "round" property of Temporal.ZonedDateTime.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.ZonedDateTime.prototype.round,
  "function",
  "`typeof ZonedDateTime.prototype.round` is `function`"
);

verifyProperty(Temporal.ZonedDateTime.prototype, "round", {
  writable: true,
  enumerable: false,
  configurable: true,
});
