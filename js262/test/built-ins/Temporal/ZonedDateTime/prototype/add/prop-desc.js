

/*---
esid: sec-temporal.zoneddatetime.prototype.add
description: The "add" property of Temporal.ZonedDateTime.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.ZonedDateTime.prototype.add,
  "function",
  "`typeof ZonedDateTime.prototype.add` is `function`"
);

verifyProperty(Temporal.ZonedDateTime.prototype, "add", {
  writable: true,
  enumerable: false,
  configurable: true,
});
