

/*---
esid: sec-set.prototype.union
description: Set.prototype.union properties
includes: [propertyHelper.js]
features: [set-methods]
---*/

assert.sameValue(
  typeof Set.prototype.union,
  "function",
  "`typeof Set.prototype.union` is `'function'`"
);

verifyProperty(Set.prototype, "union", {
  enumerable: false,
  writable: true,
  configurable: true,
});
