

/*---
esid: sec-set.prototype.issubsetof
description: Set.prototype.isSubsetOf properties
includes: [propertyHelper.js]
features: [set-methods]
---*/

assert.sameValue(
  typeof Set.prototype.isSubsetOf,
  "function",
  "`typeof Set.prototype.isSubsetOf` is `'function'`"
);

verifyProperty(Set.prototype, "isSubsetOf", {
  enumerable: false,
  writable: true,
  configurable: true,
});
