

/*---
esid: sec-set.prototype.isdisjointfrom
description: Set.prototype.isDisjointFrom properties
includes: [propertyHelper.js]
features: [set-methods]
---*/

assert.sameValue(
  typeof Set.prototype.isDisjointFrom,
  "function",
  "`typeof Set.prototype.isDisjointFrom` is `'function'`"
);

verifyProperty(Set.prototype, "isDisjointFrom", {
  enumerable: false,
  writable: true,
  configurable: true,
});
