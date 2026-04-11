

/*---
esid: sec-set.prototype.intersection
description: Set.prototype.intersection properties
includes: [propertyHelper.js]
features: [set-methods]
---*/

assert.sameValue(
  typeof Set.prototype.intersection,
  "function",
  "`typeof Set.prototype.intersection` is `'function'`"
);

verifyProperty(Set.prototype, "intersection", {
  enumerable: false,
  writable: true,
  configurable: true,
});
