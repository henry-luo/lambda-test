

/*---
esid: sec-weakmap.prototype.set
description: WeakMap.prototype.set.name descriptor
info: |
  WeakMap.prototype.set ( value )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

verifyProperty(WeakMap.prototype.set, "name", {
  value: "set",
  writable: false,
  enumerable: false,
  configurable: true
});
