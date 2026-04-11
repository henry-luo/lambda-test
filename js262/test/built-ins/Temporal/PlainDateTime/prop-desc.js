

/*---
esid: sec-temporal.plaindatetime
description: The "PlainDateTime" property of Temporal
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainDateTime,
  "function",
  "`typeof PlainDateTime` is `function`"
);

verifyProperty(Temporal, "PlainDateTime", {
  writable: true,
  enumerable: false,
  configurable: true,
});
