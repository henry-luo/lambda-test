

/*---
esid: sec-temporal.now.plaindatetimeiso
description: The "plainDateTimeISO" property of Temporal.Now
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(typeof Temporal.Now.plainDateTimeISO, "function", "typeof is function");

verifyProperty(Temporal.Now, 'plainDateTimeISO', {
  enumerable: false,
  writable: true,
  configurable: true
});
