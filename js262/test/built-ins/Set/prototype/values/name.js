

/*---
esid: sec-set.prototype.values
description: >
    Set.prototype.values ( )

    17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

verifyProperty(Set.prototype.values, "name", {
  value: "values",
  writable: false,
  enumerable: false,
  configurable: true
});
