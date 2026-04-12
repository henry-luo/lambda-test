

/*---
esid: sec-set.prototype.add
description: >
    Set.prototype.add ( value )

    17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

verifyProperty(Set.prototype.add, "length", {
  value: 1,
  writable: false,
  enumerable: false,
  configurable: true
});
