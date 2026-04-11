

/*---
esid: sec-temporal.now.plaindateiso
description: The "plainDateISO" property of Temporal.Now
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(typeof Temporal.Now.plainDateISO, "function", "typeof is function");

verifyProperty(Temporal.Now, "plainDateISO", {
  enumerable: false,
  writable: true,
  configurable: true
});
