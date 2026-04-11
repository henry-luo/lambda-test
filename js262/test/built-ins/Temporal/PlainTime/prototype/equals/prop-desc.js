

/*---
esid: sec-temporal.plaintime.prototype.equals
description: The "equals" property of Temporal.PlainTime.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainTime.prototype.equals,
  "function",
  "`typeof PlainTime.prototype.equals` is `function`"
);

verifyProperty(Temporal.PlainTime.prototype, "equals", {
  writable: true,
  enumerable: false,
  configurable: true,
});
