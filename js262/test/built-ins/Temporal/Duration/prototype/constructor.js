

/*---
esid: sec-temporal.duration.prototype.constructor
description: Test for Temporal.Duration.prototype.constructor.
info: The initial value of Temporal.Duration.prototype.constructor is %Temporal.Duration%.
includes: [propertyHelper.js]
features: [Temporal]
---*/

verifyProperty(Temporal.Duration.prototype, "constructor", {
  value: Temporal.Duration,
  writable: true,
  enumerable: false,
  configurable: true,
});
