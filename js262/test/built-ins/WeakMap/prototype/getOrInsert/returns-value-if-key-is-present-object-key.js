

/*---
esid: sec-weakmap.prototype.getOrInsert
description: |
  Returns the value from the specified Object key
info: |
  WeakMap.prototype.getOrInsert ( key, value)

  ...
  4. For each Record { [[Key]], [[Value]] } p of M.[[WeakMapData]], do
    a. If p.[[Key]] is not empty and SameValue(p.[[Key]], key) is true, return p.[[Value]].
  ...
features: [WeakMap, upsert]
---*/
var foo = {};
var bar = {};
var baz = [];
var map = new WeakMap([
  [foo, 0]
]);

assert.sameValue(map.getOrInsert(foo, 3), 0);

map.set(bar, 1);
assert.sameValue(map.getOrInsert(bar, 4), 1);

map.set(baz, 2);
assert.sameValue(map.getOrInsert(baz, 5), 2);

