

/*---
esid: sec-temporal.plaindate.prototype.toplaindatetime
description: The "toPlainDateTime" property of Temporal.PlainDate.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainDate.prototype.toPlainDateTime,
  "function",
  "`typeof PlainDate.prototype.toPlainDateTime` is `function`"
);

verifyProperty(Temporal.PlainDate.prototype, "toPlainDateTime", {
  writable: true,
  enumerable: false,
  configurable: true,
});
