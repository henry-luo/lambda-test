

/*---
esid: sec-weakset.prototype.delete
description: >
  WeakSet.prototype.delete.length value and writability.
info: |
  WeakSet.prototype.delete ( value )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

verifyProperty(WeakSet.prototype.delete, "length", {
  value: 1,
  writable: false,
  enumerable: false,
  configurable: true
});
