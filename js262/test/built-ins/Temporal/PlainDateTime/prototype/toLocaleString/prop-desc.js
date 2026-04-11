

/*---
esid: sec-temporal.plaindatetime.prototype.tolocalestring
description: The "toLocaleString" property of Temporal.PlainDateTime.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainDateTime.prototype.toLocaleString,
  "function",
  "`typeof PlainDateTime.prototype.toLocaleString` is `function`"
);

verifyProperty(Temporal.PlainDateTime.prototype, "toLocaleString", {
  writable: true,
  enumerable: false,
  configurable: true,
});
