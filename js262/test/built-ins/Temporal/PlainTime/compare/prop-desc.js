

/*---
esid: sec-temporal.plaintime.compare
description: The "compare" property of Temporal.PlainTime
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainTime.compare,
  "function",
  "`typeof PlainTime.compare` is `function`"
);

verifyProperty(Temporal.PlainTime, "compare", {
  writable: true,
  enumerable: false,
  configurable: true,
});
