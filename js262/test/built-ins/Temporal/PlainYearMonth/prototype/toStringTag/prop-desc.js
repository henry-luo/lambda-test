

/*---
esid: sec-temporal.plainyearmonth.prototype-@@tostringtag
description: The @@toStringTag property of Temporal.PlainYearMonth
includes: [propertyHelper.js]
features: [Temporal]
---*/

verifyProperty(Temporal.PlainYearMonth.prototype, Symbol.toStringTag, {
  value: "Temporal.PlainYearMonth",
  writable: false,
  enumerable: false,
  configurable: true,
});
