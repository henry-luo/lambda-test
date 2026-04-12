

/*---
esid: sec-temporal.plainmonthday.prototype.tostring
description: The "toString" property of Temporal.PlainMonthDay.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainMonthDay.prototype.toString,
  "function",
  "`typeof PlainMonthDay.prototype.toString` is `function`"
);

verifyProperty(Temporal.PlainMonthDay.prototype, "toString", {
  writable: true,
  enumerable: false,
  configurable: true,
});
