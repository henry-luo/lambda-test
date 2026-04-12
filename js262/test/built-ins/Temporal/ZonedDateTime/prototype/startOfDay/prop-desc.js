

/*---
esid: sec-temporal.zoneddatetime.prototype.startofday
description: The "startOfDay" property of Temporal.ZonedDateTime.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.ZonedDateTime.prototype.startOfDay,
  "function",
  "`typeof ZonedDateTime.prototype.startOfDay` is `function`"
);

verifyProperty(Temporal.ZonedDateTime.prototype, "startOfDay", {
  writable: true,
  enumerable: false,
  configurable: true,
});
