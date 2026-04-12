

/*---
esid: sec-set.prototype.clear
description: >
    Set.prototype.clear ( )

    17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

verifyProperty(Set.prototype.clear, "length", {
  value: 0,
  writable: false,
  enumerable: false,
  configurable: true
});
