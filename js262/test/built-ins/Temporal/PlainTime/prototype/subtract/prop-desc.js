

/*---
esid: sec-temporal.plaintime.prototype.subtract
description: The "subtract" property of Temporal.PlainTime.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainTime.prototype.subtract,
  "function",
  "`typeof PlainTime.prototype.subtract` is `function`"
);

verifyProperty(Temporal.PlainTime.prototype, "subtract", {
  writable: true,
  enumerable: false,
  configurable: true,
});
