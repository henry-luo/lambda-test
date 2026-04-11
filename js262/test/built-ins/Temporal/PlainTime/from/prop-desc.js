

/*---
esid: sec-temporal.plaintime.from
description: The "from" property of Temporal.PlainTime
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainTime.from,
  "function",
  "`typeof PlainTime.from` is `function`"
);

verifyProperty(Temporal.PlainTime, "from", {
  writable: true,
  enumerable: false,
  configurable: true,
});
