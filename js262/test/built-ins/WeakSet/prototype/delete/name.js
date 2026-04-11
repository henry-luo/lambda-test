

/*---
esid: sec-weakset.prototype.delete
description: >
  WeakSet.prototype.delete.name value and writability.
info: |
  WeakSet.prototype.delete ( value )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

verifyProperty(WeakSet.prototype.delete, "name", {
  value: "delete",
  writable: false,
  enumerable: false,
  configurable: true
});
