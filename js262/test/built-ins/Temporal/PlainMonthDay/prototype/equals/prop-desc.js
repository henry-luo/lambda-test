

/*---
esid: sec-temporal.plainmonthday.prototype.equals
description: The "equals" property of Temporal.PlainMonthDay.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainMonthDay.prototype.equals,
  "function",
  "`typeof PlainMonthDay.prototype.equals` is `function`"
);

verifyProperty(Temporal.PlainMonthDay.prototype, "equals", {
  writable: true,
  enumerable: false,
  configurable: true,
});
