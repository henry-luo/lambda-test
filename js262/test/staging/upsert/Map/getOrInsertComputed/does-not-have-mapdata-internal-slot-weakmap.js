

/*---
esid: proposal-upsert
description: |
  Throws a TypeError if `this` is a WeakMap object.
info: |
  Map.prototype.getOrInsertComputed ( key , callbackfn )

  ...
  1. Let M be the this value.
  2. Perform ? RequireInternalSlot(M, [[MapData]]).
  ...
features: [WeakMap, arrow-function, upsert]
flags: [noStrict]
---*/
assert.throws(TypeError, function() {
  Map.prototype.getOrInsertComputed.call(new WeakMap(), 1, () => 1);
});

assert.throws(TypeError, function() {
  var map = new Map();
  map.getOrInsertComputed.call(new WeakMap(), 1, () => 1);
});

