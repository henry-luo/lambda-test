

/*---
esid: sec-set.prototype.values
description: >
    Set.prototype.values ( )

    17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

assert.sameValue(
  typeof Set.prototype.values,
  "function",
  "`typeof Set.prototype.values` is `'function'`"
);

verifyProperty(Set.prototype, "values", {
  writable: true,
  enumerable: false,
  configurable: true,
});
