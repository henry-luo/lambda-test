

/*---
esid: sec-temporal.plaindate
description: The "PlainDate" property of Temporal
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainDate,
  "function",
  "`typeof PlainDate` is `function`"
);

verifyProperty(Temporal, "PlainDate", {
  writable: true,
  enumerable: false,
  configurable: true,
});
