

/*---
esid: proposal-upsert
description: |
  Throws a TypeError if `this` is a Set Object
info: |
  Map.prototype.getOrInsertComputed ( key , callbackfn )

  ...
  1. Let M be the this value.
  2. Perform ? RequireInternalSlot(M, [[MapData]])
  ...
features: [Set, arrow-function, upsert]
flags: [noStrict]
---*/
assert.throws(TypeError, function () {
  Map.prototype.getOrInsertComputed.call(new Set(), 1, () => 1);
});

assert.throws(TypeError, function () {
  var map = new Map();
  map.getOrInsertComputed.call(new Set(), 1, () => 1);
});

