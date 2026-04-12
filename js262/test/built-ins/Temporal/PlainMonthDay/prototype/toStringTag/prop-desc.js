

/*---
esid: sec-temporal.plainmonthday.prototype-@@tostringtag
description: The @@toStringTag property of Temporal.PlainMonthDay
includes: [propertyHelper.js]
features: [Temporal]
---*/

verifyProperty(Temporal.PlainMonthDay.prototype, Symbol.toStringTag, {
  value: "Temporal.PlainMonthDay",
  writable: false,
  enumerable: false,
  configurable: true,
});
