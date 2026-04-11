

/*---
esid: sec-temporal.plaindate.prototype.tolocalestring
description: The "toLocaleString" property of Temporal.PlainDate.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainDate.prototype.toLocaleString,
  "function",
  "`typeof PlainDate.prototype.toLocaleString` is `function`"
);

verifyProperty(Temporal.PlainDate.prototype, "toLocaleString", {
  writable: true,
  enumerable: false,
  configurable: true,
});
