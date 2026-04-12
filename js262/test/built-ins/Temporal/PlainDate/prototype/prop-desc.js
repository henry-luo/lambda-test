

/*---
esid: sec-temporal.plaindate.prototype
description: The "prototype" property of Temporal.PlainDate
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(typeof Temporal.PlainDate.prototype, "object");
assert.notSameValue(Temporal.PlainDate.prototype, null);

verifyProperty(Temporal.PlainDate, "prototype", {
  writable: false,
  enumerable: false,
  configurable: false,
});
