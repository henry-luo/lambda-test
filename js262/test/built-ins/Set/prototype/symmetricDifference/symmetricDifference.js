

/*---
esid: sec-set.prototype.symmetricdifference
description: Set.prototype.symmetricDifference properties
includes: [propertyHelper.js]
features: [set-methods]
---*/

assert.sameValue(
  typeof Set.prototype.symmetricDifference,
  "function",
  "`typeof Set.prototype.symmetricDifference` is `'function'`"
);

verifyProperty(Set.prototype, "symmetricDifference", {
  enumerable: false,
  writable: true,
  configurable: true,
});
