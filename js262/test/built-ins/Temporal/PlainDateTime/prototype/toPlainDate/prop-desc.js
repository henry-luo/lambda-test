

/*---
esid: sec-temporal.plaindatetime.prototype.toplaindate
description: The "toPlainDate" property of Temporal.PlainDateTime.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainDateTime.prototype.toPlainDate,
  "function",
  "`typeof PlainDateTime.prototype.toPlainDate` is `function`"
);

verifyProperty(Temporal.PlainDateTime.prototype, "toPlainDate", {
  writable: true,
  enumerable: false,
  configurable: true,
});
