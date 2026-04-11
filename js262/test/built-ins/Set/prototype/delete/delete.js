

/*---
esid: sec-set.prototype.delete
description: >
    Set.prototype.delete ( value )

    17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

assert.sameValue(
  typeof Set.prototype.delete,
  "function",
  "`typeof Set.prototype.delete` is `'function'`"
);

verifyProperty(Set.prototype, "delete", {
  writable: true,
  enumerable: false,
  configurable: true,
});
