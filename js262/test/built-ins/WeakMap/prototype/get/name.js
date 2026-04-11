

/*---
esid: sec-weakmap.prototype.get
description: >
  WeakMap.prototype.get.name value and descriptor.
info: |
  WeakMap.prototype.get ( key )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

verifyProperty(WeakMap.prototype.get, "name", {
  value: "get",
  writable: false,
  enumerable: false,
  configurable: true
});
