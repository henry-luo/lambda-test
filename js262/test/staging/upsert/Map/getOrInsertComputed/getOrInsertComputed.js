

/*---
esid: proposal-upsert
description: |
  Property type and descriptor.
info: |
  Map.prototype.getOrInsertComputed ( key , callbackfn )

  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
features: [arrow-function, upsert]
flags: [noStrict]
---*/
assert.sameValue(
  typeof Map.prototype.getOrInsertComputed,
  'function',
  '`typeof Map.prototype.getOrInsertComputed` is `function`'
);

verifyProperty(Map.prototype, "getOrInsertComputed", {
  value: Map.prototype.getOrInsertComputed,
  writable: true,
  enumerable: false,
  configurable: true
});

