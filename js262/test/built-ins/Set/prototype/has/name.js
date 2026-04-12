

/*---
esid: sec-set.prototype.has
description: >
    Set.prototype.has ( value )

    17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

verifyProperty(Set.prototype.has, "name", {
  value: "has",
  writable: false,
  enumerable: false,
  configurable: true
});
