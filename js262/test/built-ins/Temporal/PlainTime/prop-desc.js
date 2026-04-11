

/*---
esid: sec-temporal.plaintime
description: The "PlainTime" property of Temporal
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainTime,
  "function",
  "`typeof PlainTime` is `function`"
);

verifyProperty(Temporal, "PlainTime", {
  writable: true,
  enumerable: false,
  configurable: true,
});
