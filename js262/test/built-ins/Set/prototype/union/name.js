

/*---
esid: sec-set.prototype.union
description: Set.prototype.union name property
info: |
    Set.prototype.union ( other )
includes: [propertyHelper.js]
features: [set-methods]
---*/
assert.sameValue(typeof Set.prototype.union, "function");

verifyProperty(Set.prototype.union, "name", {
  enumerable: false,
  writable: false,
  configurable: true,
  value: "union",
});
