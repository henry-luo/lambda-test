

/*---
esid: sec-temporal.plaintime.prototype.tolocalestring
description: The "toLocaleString" property of Temporal.PlainTime.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainTime.prototype.toLocaleString,
  "function",
  "`typeof PlainTime.prototype.toLocaleString` is `function`"
);

verifyProperty(Temporal.PlainTime.prototype, "toLocaleString", {
  writable: true,
  enumerable: false,
  configurable: true,
});
