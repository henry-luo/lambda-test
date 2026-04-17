

/*---
esid: proposal-upsert
description: |
  WeakMap.prototype.getOrInsertComputed.name descriptor
info: |
  WeakMap.prototype.getOrInsertComputed ( key, callbackfn )

  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
features: [upsert]
flags: [noStrict]
---*/
verifyProperty(Map.prototype.getOrInsertComputed, "name", {
  value: "getOrInsertComputed",
  writable: false,
  enumerable: false,
  configurable: true
});

