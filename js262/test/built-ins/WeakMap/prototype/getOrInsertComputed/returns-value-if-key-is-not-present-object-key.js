

/*---
esid: sec-weakmap.prototype.getorinsertcomputed
description: |
  Returns the value from the specified Object key
info: |
  WeakMap.prototype.getOrInsertComputed ( key, callbackfn )

  ...
  8. Let p be the Record { [[Key]]: key, [[Value]]: value }.
  9. Append p to M.[[WeakMapData]].
  10. Return value.
features: [WeakMap, upsert]
---*/
var foo = {};
var bar = {};
var baz = [];
var map = new WeakMap();

assert.sameValue(map.getOrInsertComputed(foo, () => 0), 0);

assert.sameValue(map.getOrInsertComputed(bar, () => 1), 1);

assert.sameValue(map.getOrInsertComputed(baz, () => 2), 2);

