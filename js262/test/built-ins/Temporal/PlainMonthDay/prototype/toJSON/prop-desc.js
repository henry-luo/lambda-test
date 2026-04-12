

/*---
esid: sec-temporal.plainmonthday.prototype.tojson
description: The "toJSON" property of Temporal.PlainMonthDay.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainMonthDay.prototype.toJSON,
  "function",
  "`typeof PlainMonthDay.prototype.toJSON` is `function`"
);

verifyProperty(Temporal.PlainMonthDay.prototype, "toJSON", {
  writable: true,
  enumerable: false,
  configurable: true,
});
