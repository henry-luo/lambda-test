

/*---
esid: sec-temporal.plaindate.from
description: The "from" property of Temporal.PlainDate
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainDate.from,
  "function",
  "`typeof PlainDate.from` is `function`"
);

verifyProperty(Temporal.PlainDate, "from", {
  writable: true,
  enumerable: false,
  configurable: true,
});
