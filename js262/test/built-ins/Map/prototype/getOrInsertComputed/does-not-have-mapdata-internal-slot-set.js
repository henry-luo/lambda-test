

/*---
esid: sec-map.prototype.getorinsertcomputed
description: |
  Throws a TypeError if `this` is a Set Object
info: |
  Map.prototype.getOrInsertComputed ( key , callbackfn )

  ...
  1. Let M be the this value.
  2. Perform ? RequireInternalSlot(M, [[MapData]])
  ...
features: [Set, arrow-function, upsert]
---*/
var set = new Set();
assert.throws(TypeError, function () {
  Map.prototype.getOrInsertComputed.call(set, 1, () => 1);
});

var map = new Map();
assert.throws(TypeError, function () {
  map.getOrInsertComputed.call(set, 1, () => 1);
});

