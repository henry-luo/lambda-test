

/*---
esid: sec-temporal.now.zoneddatetimeiso
description: The "zonedDateTimeISO" property of Temporal.Now
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(typeof Temporal.Now.zonedDateTimeISO, "function", "typeof is function");

verifyProperty(Temporal.Now, 'zonedDateTimeISO', {
  enumerable: false,
  writable: true,
  configurable: true
});
