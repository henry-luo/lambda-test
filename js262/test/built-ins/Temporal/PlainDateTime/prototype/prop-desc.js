

/*---
esid: sec-temporal.plaindatetime.prototype
description: The "prototype" property of Temporal.PlainDateTime
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(typeof Temporal.PlainDateTime.prototype, "object");
assert.notSameValue(Temporal.PlainDateTime.prototype, null);

verifyProperty(Temporal.PlainDateTime, "prototype", {
  writable: false,
  enumerable: false,
  configurable: false,
});
