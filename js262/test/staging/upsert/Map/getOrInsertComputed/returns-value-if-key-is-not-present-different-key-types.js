

/*---
esid: proposal-upsert
description: |
  Returns the value from the specified key on different types, when key not present.
info: |
  Map.prototype.getOrInsertComputed ( key , callbackfn )

  ...
  7. Let p be the Record { [[Key]]: key, [[Value]]: value }.
  8. Append p to M.[[MapData]].
  9. Return p.[[Value]].
  ...
features: [Symbol, arrow-function, upsert]
flags: [noStrict]
---*/
var map = new Map();

assert.sameValue(map.getOrInsertComputed('bar', () => 0), 0);

assert.sameValue(map.getOrInsertComputed(1, () => 42), 42);

assert.sameValue(map.getOrInsertComputed(NaN, () => 1), 1);

var item = {};
assert.sameValue(map.getOrInsertComputed(item, () => 2), 2);

item = [];
assert.sameValue(map.getOrInsertComputed(item, () => 3), 3);

item = Symbol('item');
assert.sameValue(map.getOrInsertComputed(item, () => 4), 4);

item = null;
assert.sameValue(map.getOrInsertComputed(item, () => 5), 5);

item = undefined;
assert.sameValue(map.getOrInsertComputed(item, () => 6), 6);

