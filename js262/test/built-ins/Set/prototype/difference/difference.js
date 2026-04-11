

/*---
esid: sec-set.prototype.difference
description: Set.prototype.difference properties
includes: [propertyHelper.js]
features: [set-methods]
---*/

assert.sameValue(
  typeof Set.prototype.difference,
  "function",
  "`typeof Set.prototype.difference` is `'function'`"
);

verifyProperty(Set.prototype, "difference", {
  enumerable: false,
  writable: true,
  configurable: true,
});
