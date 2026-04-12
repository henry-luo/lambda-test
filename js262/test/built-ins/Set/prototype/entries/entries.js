

/*---
esid: sec-set.prototype.entries
description: >
    Set.prototype.entries ( )

    17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

assert.sameValue(
  typeof Set.prototype.entries,
  "function",
  "`typeof Set.prototype.entries` is `'function'`"
);

verifyProperty(Set.prototype, "entries", {
  writable: true,
  enumerable: false,
  configurable: true,
});
