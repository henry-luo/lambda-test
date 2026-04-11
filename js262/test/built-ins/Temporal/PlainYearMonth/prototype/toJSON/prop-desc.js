

/*---
esid: sec-temporal.plainyearmonth.prototype.tojson
description: The "toJSON" property of Temporal.PlainYearMonth.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainYearMonth.prototype.toJSON,
  "function",
  "`typeof PlainYearMonth.prototype.toJSON` is `function`"
);

verifyProperty(Temporal.PlainYearMonth.prototype, "toJSON", {
  writable: true,
  enumerable: false,
  configurable: true,
});
