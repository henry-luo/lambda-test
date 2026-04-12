

/*---
esid: sec-weakmap.prototype.getorinsertcomputed
description: |
  Check that callbackfn receives undefined for this and exactly one argument.
info: |
  WeakMap.prototype.getOrInsertComputed ( key , callbackfn )

  ...

  6. Let value be ? Call(callbackfn, key).
  ...
features: [upsert, Symbol, WeakMap, symbols-as-weakmap-keys]
flags: [onlyStrict]
---*/
var map = new WeakMap();
var symbol = Symbol('a description');

map.getOrInsertComputed(symbol, function () {
  assert.sameValue(this, undefined);
  assert.sameValue(arguments.length, 1);
  assert.sameValue(arguments[0], symbol);
});
