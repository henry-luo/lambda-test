

/*---
esid: sec-temporal.plaindatetime.prototype.add
description: The "add" property of Temporal.PlainDateTime.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainDateTime.prototype.add,
  "function",
  "`typeof PlainDateTime.prototype.add` is `function`"
);

verifyProperty(Temporal.PlainDateTime.prototype, "add", {
  writable: true,
  enumerable: false,
  configurable: true,
});
