

/*---
esid: sec-temporal.plaindatetime.prototype.subtract
description: The "subtract" property of Temporal.PlainDateTime.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainDateTime.prototype.subtract,
  "function",
  "`typeof PlainDateTime.prototype.subtract` is `function`"
);

verifyProperty(Temporal.PlainDateTime.prototype, "subtract", {
  writable: true,
  enumerable: false,
  configurable: true,
});
