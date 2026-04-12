

/*---
esid: sec-temporal.now.plaintimeiso
description: The "plainTimeISO" property of Temporal.Now
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(typeof Temporal.Now.plainTimeISO, "function", "typeof is function");

verifyProperty(Temporal.Now, "plainTimeISO", {
  enumerable: false,
  writable: true,
  configurable: true
});
