

/*---
esid: sec-set.prototype.clear
description: >
    Set.prototype.clear ( )

    17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

verifyProperty(Set.prototype.clear, "name", {
  value: "clear",
  writable: false,
  enumerable: false,
  configurable: true
});
