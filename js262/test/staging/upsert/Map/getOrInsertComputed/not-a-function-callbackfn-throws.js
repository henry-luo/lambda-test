

/*---
esid: proposal-upsert
description: |
  Throws a TypeError if `callbackfn` is not callable.
info: |
  Map.prototype.getOrInsertComputed ( key , callbackfn )

  ...
  3. If IsCallable(callbackfn) is false, throw a TypeError exception.
  ...
features: [Symbol, upsert]
flags: [noStrict]
---*/
var m = new Map();

assert.throws(TypeError, function () {
    m.getOrInsertComputed.call(m, 1, 1);
});

assert.throws(TypeError, function () {
    m.getOrInsertComputed.call(m, 1, "");
});

assert.throws(TypeError, function () {
    m.getOrInsertComputed.call(m, 1, true);
});

assert.throws(TypeError, function () {
    m.getOrInsertComputed.call(m, 1, undefined);
});

assert.throws(TypeError, function () {
    m.getOrInsertComputed.call(m, 1, null);
});

assert.throws(TypeError, function () {
    m.getOrInsertComputed.call(m, 1, {});
});

assert.throws(TypeError, function () {
    m.getOrInsertComputed.call(m, 1, []);
});

assert.throws(TypeError, function () {
    m.getOrInsertComputed.call(m, 1, Symbol());
});

