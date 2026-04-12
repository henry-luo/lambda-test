

/*---
esid: sec-temporal.plainyearmonth.prototype.since
description: The "since" property of Temporal.PlainYearMonth.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainYearMonth.prototype.since,
  "function",
  "`typeof PlainYearMonth.prototype.since` is `function`"
);

verifyProperty(Temporal.PlainYearMonth.prototype, "since", {
  writable: true,
  enumerable: false,
  configurable: true,
});
