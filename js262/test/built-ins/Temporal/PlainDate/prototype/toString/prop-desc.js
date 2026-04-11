

/*---
esid: sec-temporal.plaindate.prototype.tostring
description: The "toString" property of Temporal.PlainDate.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainDate.prototype.toString,
  "function",
  "`typeof PlainDate.prototype.toString` is `function`"
);

verifyProperty(Temporal.PlainDate.prototype, "toString", {
  writable: true,
  enumerable: false,
  configurable: true,
});
