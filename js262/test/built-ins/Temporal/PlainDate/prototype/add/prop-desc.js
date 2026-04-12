

/*---
esid: sec-temporal.plaindate.prototype.add
description: The "add" property of Temporal.PlainDate.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainDate.prototype.add,
  "function",
  "`typeof PlainDate.prototype.add` is `function`"
);

verifyProperty(Temporal.PlainDate.prototype, "add", {
  writable: true,
  enumerable: false,
  configurable: true,
});
