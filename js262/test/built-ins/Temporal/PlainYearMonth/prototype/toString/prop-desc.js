

/*---
esid: sec-temporal.plainyearmonth.prototype.tostring
description: The "toString" property of Temporal.PlainYearMonth.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainYearMonth.prototype.toString,
  "function",
  "`typeof PlainYearMonth.prototype.toString` is `function`"
);

verifyProperty(Temporal.PlainYearMonth.prototype, "toString", {
  writable: true,
  enumerable: false,
  configurable: true,
});
