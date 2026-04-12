

/*---
esid: sec-temporal.zoneddatetime.prototype.constructor
description: Test for Temporal.ZonedDateTime.prototype.constructor.
info: The initial value of Temporal.ZonedDateTime.prototype.constructor is %Temporal.ZonedDateTime%.
includes: [propertyHelper.js]
features: [Temporal]
---*/

verifyProperty(Temporal.ZonedDateTime.prototype, "constructor", {
  value: Temporal.ZonedDateTime,
  writable: true,
  enumerable: false,
  configurable: true,
});
