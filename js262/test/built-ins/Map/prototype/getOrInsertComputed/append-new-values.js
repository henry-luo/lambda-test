

/*---
esid: sec-map.prototype.getorinsertcomputed
description: |
  Append a new value as the last element of entries.
info: |
  Map.prototype.getOrInsertComputed ( key , callbackfn )

  ...
  4. Set key to CanonicalizeKeyedCollectionKey(key).
  5. For each Record { [[Key]], [[Value]] } p of M.[[MapData]], do
    a. If p.[[Key]] is not empty and SameValue(p.[[Key]], key) is true, return p.[[Value]].
  6. Let value be ? Call(callbackfn, key).
  7. Let p be the Record { [[Key]]: key, [[Value]]: value }.
  8. Append p to M.[[MapData]].
  ...
features: [Symbol, arrow-function, upsert]
---*/
var s = Symbol(2);
var map = new Map([[4, 4], ['foo3', 3], [s, 2]]);

map.getOrInsertComputed(null, () => 42);
map.getOrInsertComputed(1, () => 'valid');

assert.sameValue(map.size, 5);
assert.sameValue(map.get(1), 'valid');

var results = [];

map.forEach(function(value, key) {
  results.push({
    value: value,
    key: key
  });
});

var result = results.pop();
assert.sameValue(result.value, 'valid');
assert.sameValue(result.key, 1);

result = results.pop();
assert.sameValue(result.value, 42);
assert.sameValue(result.key, null);

result = results.pop();
assert.sameValue(result.value, 2);
assert.sameValue(result.key, s);

