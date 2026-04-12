

/*---
esid: sec-temporal.zoneddatetime.prototype.tostring
description: The "toString" property of Temporal.ZonedDateTime.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.ZonedDateTime.prototype.toString,
  "function",
  "`typeof ZonedDateTime.prototype.toString` is `function`"
);

verifyProperty(Temporal.ZonedDateTime.prototype, "toString", {
  writable: true,
  enumerable: false,
  configurable: true,
});
