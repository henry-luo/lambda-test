

/*---
esid: sec-weakmap.prototype.getOrInsert
description: |
  WeakMap.prototype.getOrInsert.length descriptor
info: |
  WeakMap.prototype.getOrInsert ( key, value )

  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
features: [upsert]
---*/
verifyProperty(WeakMap.prototype.getOrInsert, "length", {
  value: 2,
  writable: false,
  enumerable: false,
  configurable: true
});

