

/*---
esid: sec-temporal.plaintime.prototype.tojson
description: The "toJSON" property of Temporal.PlainTime.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainTime.prototype.toJSON,
  "function",
  "`typeof PlainTime.prototype.toJSON` is `function`"
);

verifyProperty(Temporal.PlainTime.prototype, "toJSON", {
  writable: true,
  enumerable: false,
  configurable: true,
});
