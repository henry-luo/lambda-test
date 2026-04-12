

/*---
esid: sec-weakmap.prototype.getorinsertcomputed
description: |
  Throws TypeError if `this` doesn't have a [[WeakMapData]] internal slot.
info: |
  WeakMap.prototype.getOrInsertComputed ( key, callbackfn )

  ...
  2. Perform ? RequireInternalSlot(M, [[WeakMapData]]).
  ...
features: [upsert, WeakMap]
---*/
assert.throws(TypeError, function() {
  WeakMap.prototype.getOrInsertComputed.call({}, {}, () => 1);
});

var map = new WeakMap();
assert.throws(TypeError, function() {
  map.getOrInsertComputed.call({}, {}, () => 1);
});

