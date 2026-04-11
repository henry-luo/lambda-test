

/*---
esid: sec-temporal.plaindatetime.prototype.equals
description: The "equals" property of Temporal.PlainDateTime.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainDateTime.prototype.equals,
  "function",
  "`typeof PlainDateTime.prototype.equals` is `function`"
);

verifyProperty(Temporal.PlainDateTime.prototype, "equals", {
  writable: true,
  enumerable: false,
  configurable: true,
});
