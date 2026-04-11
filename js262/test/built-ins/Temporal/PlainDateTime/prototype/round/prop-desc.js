

/*---
esid: sec-temporal.plaindatetime.prototype.round
description: The "round" property of Temporal.PlainDateTime.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainDateTime.prototype.round,
  "function",
  "`typeof PlainDateTime.prototype.round` is `function`"
);

verifyProperty(Temporal.PlainDateTime.prototype, "round", {
  writable: true,
  enumerable: false,
  configurable: true,
});
