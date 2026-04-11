

/*---
esid: sec-temporal.plaindate.prototype.tojson
description: The "toJSON" property of Temporal.PlainDate.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainDate.prototype.toJSON,
  "function",
  "`typeof PlainDate.prototype.toJSON` is `function`"
);

verifyProperty(Temporal.PlainDate.prototype, "toJSON", {
  writable: true,
  enumerable: false,
  configurable: true,
});
