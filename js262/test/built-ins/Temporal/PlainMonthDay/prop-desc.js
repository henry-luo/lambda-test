

/*---
esid: sec-temporal.plainmonthday
description: The "PlainMonthDay" property of Temporal
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainMonthDay,
  "function",
  "`typeof PlainMonthDay` is `function`"
);

verifyProperty(Temporal, "PlainMonthDay", {
  writable: true,
  enumerable: false,
  configurable: true,
});
