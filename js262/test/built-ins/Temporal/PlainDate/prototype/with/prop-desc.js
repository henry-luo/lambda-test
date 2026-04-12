

/*---
esid: sec-temporal.plaindate.prototype.with
description: The "with" property of Temporal.PlainDate.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainDate.prototype.with,
  "function",
  "`typeof PlainDate.prototype.with` is `function`"
);

verifyProperty(Temporal.PlainDate.prototype, "with", {
  writable: true,
  enumerable: false,
  configurable: true,
});
