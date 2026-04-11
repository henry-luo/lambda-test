

/*---
esid: sec-temporal.plaintime.prototype.round
description: The "round" property of Temporal.PlainTime.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainTime.prototype.round,
  "function",
  "`typeof PlainTime.prototype.round` is `function`"
);

verifyProperty(Temporal.PlainTime.prototype, "round", {
  writable: true,
  enumerable: false,
  configurable: true,
});
