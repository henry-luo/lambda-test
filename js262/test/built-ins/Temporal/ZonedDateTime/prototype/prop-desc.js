

/*---
esid: sec-temporal.zoneddatetime.prototype
description: The "prototype" property of Temporal.ZonedDateTime
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(typeof Temporal.ZonedDateTime.prototype, "object");
assert.notSameValue(Temporal.ZonedDateTime.prototype, null);

verifyProperty(Temporal.ZonedDateTime, "prototype", {
  writable: false,
  enumerable: false,
  configurable: false,
});
