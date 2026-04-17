

/*---
esid: proposal-upsert
description: |
  Throws a TypeError if `this` is not an Object.
info: |
  Map.prototype.getOrInsertComputed ( key , callbackfn )

  1. Let M be the this value
  2. Perform ? RequireInternalSlot(M, [[MapData]])
  ...
features: [Symbol, arrow-function, upsert]
flags: [noStrict]
---*/
var m = new Map();

assert.throws(TypeError, function () {
    m.getOrInsertComputed.call(false, 1, () => 1);
});

assert.throws(TypeError, function () {
    m.getOrInsertComputed.call(1, 1, () => 1);
});

assert.throws(TypeError, function () {
    m.getOrInsertComputed.call("", 1, () => 1);
});

assert.throws(TypeError, function () {
    m.getOrInsertComputed.call(undefined, 1, () => 1);
});

assert.throws(TypeError, function () {
    m.getOrInsertComputed.call(null, 1, () => 1);
});

assert.throws(TypeError, function () {
    m.getOrInsertComputed.call(Symbol(), 1, () => 1);
});

