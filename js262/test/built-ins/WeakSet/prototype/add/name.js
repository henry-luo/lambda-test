

/*---
esid: sec-weakset.prototype.add
description: WeakSet.prototype.add.name descriptor
info: |
  WeakSet.prototype.add ( value )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

verifyProperty(WeakSet.prototype.add, "name", {
  value: "add",
  writable: false,
  enumerable: false,
  configurable: true
});
