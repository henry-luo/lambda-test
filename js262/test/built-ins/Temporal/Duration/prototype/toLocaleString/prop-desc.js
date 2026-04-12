

/*---
esid: sec-temporal.duration.prototype.tolocalestring
description: The "toLocaleString" property of Temporal.Duration.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.Duration.prototype.toLocaleString,
  "function",
  "`typeof Duration.prototype.toLocaleString` is `function`"
);

verifyProperty(Temporal.Duration.prototype, "toLocaleString", {
  writable: true,
  enumerable: false,
  configurable: true,
});
