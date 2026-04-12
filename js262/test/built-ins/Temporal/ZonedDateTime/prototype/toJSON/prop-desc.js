

/*---
esid: sec-temporal.zoneddatetime.prototype.tojson
description: The "toJSON" property of Temporal.ZonedDateTime.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.ZonedDateTime.prototype.toJSON,
  "function",
  "`typeof ZonedDateTime.prototype.toJSON` is `function`"
);

verifyProperty(Temporal.ZonedDateTime.prototype, "toJSON", {
  writable: true,
  enumerable: false,
  configurable: true,
});
