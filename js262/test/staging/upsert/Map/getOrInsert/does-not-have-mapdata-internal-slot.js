

/*---
esid: proposal-upsert
description: |
  Throws a TypeError if `this` object does not have a [[MapData]] internal slot.
info: |
  Map.getOrInsert ( key , value )

  ...
  1. Let M be the this value.
  2. Perform ? RequireInternalSLot(M, [[MapData]])
  ...
features: [upsert]
flags: [noStrict]
---*/
var map = new Map();

assert.throws(TypeError, function () {
    Map.prototype.getOrInsert.call([], 1, 1);
});

assert.throws(TypeError, function () {
    map.getOrInsert.call([], 1, 1);
});

assert.throws(TypeError, function () {
    Map.prototype.getOrInsert.call({}, 1, 1);
});

assert.throws(TypeError, function () {
    map.getOrInsert.call({}, 1, 1);
});

