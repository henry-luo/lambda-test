

/*---
esid: sec-temporal.plaindate.prototype.equals
description: The "equals" property of Temporal.PlainDate.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainDate.prototype.equals,
  "function",
  "`typeof PlainDate.prototype.equals` is `function`"
);

verifyProperty(Temporal.PlainDate.prototype, "equals", {
  writable: true,
  enumerable: false,
  configurable: true,
});
