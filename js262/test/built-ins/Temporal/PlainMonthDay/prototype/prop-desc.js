

/*---
esid: sec-temporal.plainmonthday.prototype
description: The "prototype" property of Temporal.PlainMonthDay
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(typeof Temporal.PlainMonthDay.prototype, "object");
assert.notSameValue(Temporal.PlainMonthDay.prototype, null);

verifyProperty(Temporal.PlainMonthDay, "prototype", {
  writable: false,
  enumerable: false,
  configurable: false,
});
