

/*---
esid: sec-weakmap.prototype.getorinsertcomputed
description: |
  Throws a TypeError if `this` is not an Object.
info: |
  WeakMap.prototype.getOrInsertComputed ( key , callbackfn )

  1. Let M be the this value
  2. Perform ? RequireInternalSlot(M, [[WeakMapData]])
  ...
features: [WeakMap, Symbol, upsert]
---*/
var m = new WeakMap();

assert.throws(TypeError, function () {
    m.getOrInsertComputed.call(false, {}, () => 1);
});

assert.throws(TypeError, function () {
    m.getOrInsertComputed.call(1, {}, () => 1);
});

assert.throws(TypeError, function () {
    m.getOrInsertComputed.call("", {}, () => 1);
});

assert.throws(TypeError, function () {
    m.getOrInsertComputed.call(undefined, {}, () => 1);
});

assert.throws(TypeError, function () {
    m.getOrInsertComputed.call(null, {}, () => 1);
});

assert.throws(TypeError, function () {
    m.getOrInsertComputed.call(Symbol(), {}, () => 1);
});

assert.throws(TypeError, function () {
    m.getOrInsertComputed.call('', {}, () => 1);
});

