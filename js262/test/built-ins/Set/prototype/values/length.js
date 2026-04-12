

/*---
esid: sec-set.prototype.values
description: >
    Set.prototype.values ( )

    17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

verifyProperty(Set.prototype.values, "length", {
  value: 0,
  writable: false,
  enumerable: false,
  configurable: true
});
