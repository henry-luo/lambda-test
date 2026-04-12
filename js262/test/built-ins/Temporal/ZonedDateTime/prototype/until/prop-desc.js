

/*---
esid: sec-temporal.zoneddatetime.prototype.until
description: The "until" property of Temporal.ZonedDateTime.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.ZonedDateTime.prototype.until,
  "function",
  "`typeof ZonedDateTime.prototype.until` is `function`"
);

verifyProperty(Temporal.ZonedDateTime.prototype, "until", {
  writable: true,
  enumerable: false,
  configurable: true,
});
