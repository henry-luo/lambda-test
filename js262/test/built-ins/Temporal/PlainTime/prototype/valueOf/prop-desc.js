

/*---
esid: sec-temporal.plaintime.prototype.valueof
description: The "valueOf" property of Temporal.PlainTime.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainTime.prototype.valueOf,
  "function",
  "`typeof PlainTime.prototype.valueOf` is `function`"
);

verifyProperty(Temporal.PlainTime.prototype, "valueOf", {
  writable: true,
  enumerable: false,
  configurable: true,
});
