

/*---
esid: sec-map.prototype.getorinsert
description: |
  Map.prototype.getOrInsert.length value and descriptor.
info: |
  Map.prototype.getOrInsert ( key , value )

  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
features: [upsert]
---*/
verifyProperty(Map.prototype.getOrInsert, "length", {
  value: 2,
  writable: false,
  enumerable: false,
  configurable: true
});

