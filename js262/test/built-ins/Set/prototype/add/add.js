

/*---
esid: sec-set.prototype.add
description: >
    Set.prototype.add ( value )

    17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

assert.sameValue(
  typeof Set.prototype.add,
  "function",
  "`typeof Set.prototype.add` is `'function'`"
);

verifyProperty(Set.prototype, "add", {
  writable: true,
  enumerable: false,
  configurable: true,
});
