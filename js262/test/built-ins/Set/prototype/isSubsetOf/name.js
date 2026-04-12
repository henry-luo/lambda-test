

/*---
esid: sec-set.prototype.issubsetof
description: Set.prototype.isSubsetOf name property
info: |
    Set.prototype.isSubsetOf ( other )
includes: [propertyHelper.js]
features: [set-methods]
---*/
assert.sameValue(typeof Set.prototype.isSubsetOf, "function");

verifyProperty(Set.prototype.isSubsetOf, "name", {
  enumerable: false,
  writable: false,
  configurable: true,
  value: "isSubsetOf",
});
