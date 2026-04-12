

/*---
esid: sec-temporal.plainyearmonth.prototype.add
description: The "add" property of Temporal.PlainYearMonth.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainYearMonth.prototype.add,
  "function",
  "`typeof PlainYearMonth.prototype.add` is `function`"
);

verifyProperty(Temporal.PlainYearMonth.prototype, "add", {
  writable: true,
  enumerable: false,
  configurable: true,
});
