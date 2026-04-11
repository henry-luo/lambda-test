

/*---
esid: sec-set.prototype.delete
description: >
    Set.prototype.delete ( value )

    17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

verifyProperty(Set.prototype.delete, "length", {
  value: 1,
  writable: false,
  enumerable: false,
  configurable: true
});
