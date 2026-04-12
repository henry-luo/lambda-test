

/*---
esid: sec-weakmap.prototype.set
description: WeakMap.prototype.set.length descriptor
info: |
  WeakMap.prototype.set ( key, value )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

verifyProperty(WeakMap.prototype.set, "length", {
  value: 2,
  writable: false,
  enumerable: false,
  configurable: true
});
