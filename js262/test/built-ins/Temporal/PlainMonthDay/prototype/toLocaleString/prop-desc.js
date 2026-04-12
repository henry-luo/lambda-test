

/*---
esid: sec-temporal.plainmonthday.prototype.tolocalestring
description: The "toLocaleString" property of Temporal.PlainMonthDay.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainMonthDay.prototype.toLocaleString,
  "function",
  "`typeof PlainMonthDay.prototype.toLocaleString` is `function`"
);

verifyProperty(Temporal.PlainMonthDay.prototype, "toLocaleString", {
  writable: true,
  enumerable: false,
  configurable: true,
});
