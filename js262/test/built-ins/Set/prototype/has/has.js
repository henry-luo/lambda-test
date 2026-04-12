

/*---
esid: sec-set.prototype.has
description: >
    Set.prototype.has ( value )

    17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

assert.sameValue(
  typeof Set.prototype.has,
  "function",
  "`typeof Set.prototype.has` is `'function'`"
);

verifyProperty(Set.prototype, "has", {
  writable: true,
  enumerable: false,
  configurable: true,
});
