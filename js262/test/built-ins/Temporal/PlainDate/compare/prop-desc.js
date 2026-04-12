

/*---
esid: sec-temporal.plaindate.compare
description: The "compare" property of Temporal.PlainDate
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainDate.compare,
  "function",
  "`typeof PlainDate.compare` is `function`"
);

verifyProperty(Temporal.PlainDate, "compare", {
  writable: true,
  enumerable: false,
  configurable: true,
});
