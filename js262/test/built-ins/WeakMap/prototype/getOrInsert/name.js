

/*---
esid: sec-weakmap.prototype.getOrInsert
description: |
  WeakMap.prototype.getOrInsert.name descriptor
info: |
  WeakMap.prototype.getOrInsert ( key, value )

  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
features: [upsert]
---*/
verifyProperty(WeakMap.prototype.getOrInsert, "name", {
  value: "getOrInsert",
  writable: false,
  enumerable: false,
  configurable: true
});

