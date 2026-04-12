

/*---
esid: sec-set.prototype.clear
description: >
    Set.prototype.clear ( )

    17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

assert.sameValue(
  typeof Set.prototype.clear,
  "function",
  "`typeof Set.prototype.clear` is `'function'`"
);

verifyProperty(Set.prototype, "clear", {
  writable: true,
  enumerable: false,
  configurable: true,
});
