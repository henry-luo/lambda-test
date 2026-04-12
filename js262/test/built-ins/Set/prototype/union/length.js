

/*---
esid: sec-set.prototype.union
description: Set.prototype.union length property
info: |
    Set.prototype.union ( other )
includes: [propertyHelper.js]
features: [set-methods]
---*/
assert.sameValue(typeof Set.prototype.union, "function");

verifyProperty(Set.prototype.union, "length", {
  enumerable: false,
  writable: false,
  configurable: true,
  value: 1,
});
