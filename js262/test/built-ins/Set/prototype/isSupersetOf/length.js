

/*---
esid: sec-set.prototype.issupersetof
description: Set.prototype.isSupersetOf length property
info: |
    Set.prototype.isSupersetOf ( other )
includes: [propertyHelper.js]
features: [set-methods]
---*/
assert.sameValue(typeof Set.prototype.isSupersetOf, "function");

verifyProperty(Set.prototype.isSupersetOf, "length", {
  enumerable: false,
  writable: false,
  configurable: true,
  value: 1,
});
