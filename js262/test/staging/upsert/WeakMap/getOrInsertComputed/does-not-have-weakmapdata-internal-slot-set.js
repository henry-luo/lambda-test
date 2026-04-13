

/*---
esid: proposal-upsert
description: |
  Throws TypeError if `this` doesn't have a [[WeakMapData]] internal slot.
info: |
  WeakMap.prototype.getOrInsertComputed ( key, callbackfn )

  ...
  2. Perform ? RequireInternalSlot(M, [[WeakMapData]]).
  ...
features: [Set, upsert]
flags: [noStrict]
---*/
assert.throws(TypeError, function() {
  WeakMap.prototype.getOrInsertComputed.call(new Set(), {}, () => 1);
});

assert.throws(TypeError, function() {
  var map = new WeakMap();
  map.getOrInsertComputed.call(new Set(), {}, () => 1);
});

