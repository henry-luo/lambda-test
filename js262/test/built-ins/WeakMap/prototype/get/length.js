

/*---
esid: sec-weakmap.prototype.get
description: >
  WeakMap.prototype.get.length value and descriptor.
info: |
  WeakMap.prototype.get ( key )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

verifyProperty(WeakMap.prototype.get, "length", {
  value: 1,
  writable: false,
  enumerable: false,
  configurable: true
});
