

/*---
esid: proposal-upsert
description: |
  Map.prototype.getOrInsertComputed.name value and descriptor.
info: |
  Map.prototype.getOrInsertComputed ( key , callbackfn )

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

