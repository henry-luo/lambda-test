

/*---
esid: sec-weakset.prototype.add
description: WeakSet.prototype.add.length descriptor
info: |
  WeakSet.prototype.add ( value )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

verifyProperty(WeakSet.prototype.add, "length", {
  value: 1,
  writable: false,
  enumerable: false,
  configurable: true
});
