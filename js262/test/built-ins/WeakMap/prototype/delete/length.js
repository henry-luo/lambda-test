

/*---
esid: sec-weakmap.prototype.delete
description: >
  WeakMap.prototype.delete.length value and writability.
info: |
  WeakMap.prototype.delete ( value )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

verifyProperty(WeakMap.prototype.delete, "length", {
  value: 1,
  writable: false,
  enumerable: false,
  configurable: true
});
