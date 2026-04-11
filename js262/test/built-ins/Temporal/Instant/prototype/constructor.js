

/*---
esid: sec-temporal.instant.prototype.constructor
description: Test for Temporal.Instant.prototype.constructor.
info: The initial value of Temporal.Instant.prototype.constructor is %Temporal.Instant%.
includes: [propertyHelper.js]
features: [Temporal]
---*/

verifyProperty(Temporal.Instant.prototype, "constructor", {
  value: Temporal.Instant,
  writable: true,
  enumerable: false,
  configurable: true,
});
