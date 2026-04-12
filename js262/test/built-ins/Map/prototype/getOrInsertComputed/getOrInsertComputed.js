

/*---
esid: sec-map.prototype.getorinsertcomputed
description: |
  Property type and descriptor.
info: |
  Map.prototype.getOrInsertComputed ( key , callbackfn )

  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
features: [upsert]
---*/
verifyPrimordialCallableProperty(Map.prototype, "getOrInsertComputed", "getOrInsertComputed", 2, {
  value: Map.prototype.getOrInsertComputed,
  writable: true,
  enumerable: false,
  configurable: true
});

