

/*---
esid: proposal-upsert
description: |
  Throws TypeError if `this` doesn't have a [[WeakMapData]] internal slot.
info: |
  WeakMap.prototype.getOrInsert ( key, value )

  ...
  1. Let M be the this value.
  2. Perform ? RequireInternalSlot(M, [[WeakMapData]]).
  ...
features: [upsert]
flags: [noStrict]
---*/
assert.throws(TypeError, function() {
  WeakMap.prototype.getOrInsert.call(WeakMap.prototype, {}, 1);
});

assert.throws(TypeError, function() {
  var map = new WeakMap();
  map.getOrInsert.call(WeakMap.prototype, {}, 1);
});

