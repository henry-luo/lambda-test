

/*---
esid: sec-weakmap.prototype.has
description: >
  WeakMap.prototype.has.length value and writability.
info: |
  WeakMap.prototype.has ( value )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

verifyProperty(WeakMap.prototype.has, "length", {
  value: 1,
  writable: false,
  enumerable: false,
  configurable: true
});
