

/*---
esid: sec-temporal.plaindatetime.prototype.tostring
description: The "toString" property of Temporal.PlainDateTime.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainDateTime.prototype.toString,
  "function",
  "`typeof PlainDateTime.prototype.toString` is `function`"
);

verifyProperty(Temporal.PlainDateTime.prototype, "toString", {
  writable: true,
  enumerable: false,
  configurable: true,
});
