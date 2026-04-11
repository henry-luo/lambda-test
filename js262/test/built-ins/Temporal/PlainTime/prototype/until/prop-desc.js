

/*---
esid: sec-temporal.plaintime.prototype.until
description: The "until" property of Temporal.PlainTime.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainTime.prototype.until,
  "function",
  "`typeof PlainTime.prototype.until` is `function`"
);

verifyProperty(Temporal.PlainTime.prototype, "until", {
  writable: true,
  enumerable: false,
  configurable: true,
});
