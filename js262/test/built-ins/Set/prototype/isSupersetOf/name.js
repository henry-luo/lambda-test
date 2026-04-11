

/*---
esid: sec-set.prototype.issupersetof
description: Set.prototype.isSupersetOf name property
info: |
    Set.prototype.isSupersetOf ( other )
includes: [propertyHelper.js]
features: [set-methods]
---*/
assert.sameValue(typeof Set.prototype.isSupersetOf, "function");

verifyProperty(Set.prototype.isSupersetOf, "name", {
  enumerable: false,
  writable: false,
  configurable: true,
  value: "isSupersetOf",
});
