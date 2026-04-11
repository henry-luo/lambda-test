

/*---
esid: sec-set.prototype.symmetricdifference
description: Set.prototype.symmetricDifference name property
info: |
    Set.prototype.symmetricDifference ( other )
includes: [propertyHelper.js]
features: [set-methods]
---*/
assert.sameValue(typeof Set.prototype.symmetricDifference, "function");

verifyProperty(Set.prototype.symmetricDifference, "name", {
  enumerable: false,
  writable: false,
  configurable: true,
  value: "symmetricDifference",
});
