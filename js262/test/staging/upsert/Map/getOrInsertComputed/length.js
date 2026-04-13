

/*---
esid: proposal-upsert
description: |
  Map.prototype.getOrInsert.length value and descriptor.
info: |
  Map.prototype.getOrInsertComputed ( key , callbackfn )

  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
features: [upsert]
flags: [noStrict]
---*/
verifyProperty(Map.prototype.getOrInsertComputed, "length", {
  value: 2,
  writable: false,
  enumerable: false,
  configurable: true
});

