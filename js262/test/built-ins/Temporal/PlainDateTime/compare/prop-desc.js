

/*---
esid: sec-temporal.plaindatetime.compare
description: The "compare" property of Temporal.PlainDateTime
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainDateTime.compare,
  "function",
  "`typeof PlainDateTime.compare` is `function`"
);

verifyProperty(Temporal.PlainDateTime, "compare", {
  writable: true,
  enumerable: false,
  configurable: true,
});
