

/*---
esid: sec-temporal.plaindatetime.prototype.with
description: The "with" property of Temporal.PlainDateTime.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainDateTime.prototype.with,
  "function",
  "`typeof PlainDateTime.prototype.with` is `function`"
);

verifyProperty(Temporal.PlainDateTime.prototype, "with", {
  writable: true,
  enumerable: false,
  configurable: true,
});
