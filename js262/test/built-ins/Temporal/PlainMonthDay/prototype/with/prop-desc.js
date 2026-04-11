

/*---
esid: sec-temporal.plainmonthday.prototype.with
description: The "with" property of Temporal.PlainMonthDay.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainMonthDay.prototype.with,
  "function",
  "`typeof PlainMonthDay.prototype.with` is `function`"
);

verifyProperty(Temporal.PlainMonthDay.prototype, "with", {
  writable: true,
  enumerable: false,
  configurable: true,
});
