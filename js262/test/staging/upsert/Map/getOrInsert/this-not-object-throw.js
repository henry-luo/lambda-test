

/*---
esid: proposal-upsert
description: |
  Throws a TypeError if `this` is not an Object.
info: |
  Map.prototype.getOrInsert ( key , value )

  1. Let M be the this value
  2. Perform ? RequireInternalSlot(M, [[MapData]])
  ...
features: [Symbol, upsert]
flags: [noStrict]
---*/
var m = new Map();

assert.throws(TypeError, function () {
    m.getOrInsert.call(false, 1, 1);
});

assert.throws(TypeError, function () {
    m.getOrInsert.call(1, 1, 1);
});

assert.throws(TypeError, function () {
    m.getOrInsert.call("", 1, 1);
});

assert.throws(TypeError, function () {
    m.getOrInsert.call(undefined, 1, 1);
});

assert.throws(TypeError, function () {
    m.getOrInsert.call(null, 1, 1);
});

assert.throws(TypeError, function () {
    m.getOrInsert.call(Symbol(), 1, 1);
});

