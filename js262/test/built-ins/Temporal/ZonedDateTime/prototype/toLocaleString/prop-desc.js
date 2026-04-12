

/*---
esid: sec-temporal.zoneddatetime.prototype.tolocalestring
description: The "toLocaleString" property of Temporal.ZonedDateTime.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.ZonedDateTime.prototype.toLocaleString,
  "function",
  "`typeof ZonedDateTime.prototype.toLocaleString` is `function`"
);

verifyProperty(Temporal.ZonedDateTime.prototype, "toLocaleString", {
  writable: true,
  enumerable: false,
  configurable: true,
});
