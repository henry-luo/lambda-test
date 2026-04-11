

/*---
esid: sec-temporal.plainyearmonth.prototype.until
description: The "until" property of Temporal.PlainYearMonth.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainYearMonth.prototype.until,
  "function",
  "`typeof PlainYearMonth.prototype.until` is `function`"
);

verifyProperty(Temporal.PlainYearMonth.prototype, "until", {
  writable: true,
  enumerable: false,
  configurable: true,
});
