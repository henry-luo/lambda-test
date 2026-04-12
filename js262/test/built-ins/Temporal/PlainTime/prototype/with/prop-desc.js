

/*---
esid: sec-temporal.plaintime.prototype.with
description: The "with" property of Temporal.PlainTime.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainTime.prototype.with,
  "function",
  "`typeof PlainTime.prototype.with` is `function`"
);

verifyProperty(Temporal.PlainTime.prototype, "with", {
  writable: true,
  enumerable: false,
  configurable: true,
});
