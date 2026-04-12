

/*---
esid: sec-weakset.prototype.has
description: >
  WeakSet.prototype.has.length value and writability.
info: |
  WeakSet.prototype.has ( value )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

verifyProperty(WeakSet.prototype.has, "length", {
  value: 1,
  writable: false,
  enumerable: false,
  configurable: true
});
