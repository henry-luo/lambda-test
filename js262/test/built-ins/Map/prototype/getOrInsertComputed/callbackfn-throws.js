

/*---
esid: sec-map.prototype.getorinsertcomputed
description: |
  Map.getOrInsertComputed throws when callbackfn throws return if abrubt completion Call(callbackfn, key)
info: |
  Map.prototype.getOrInsertComputed ( key , callbackfn )

  ...

  6. Let value be ? Call(callbackfn, key).
  ...
features: [upsert]
---*/
var map = new Map();

assert.throws(Error, function() {
  map.getOrInsertComputed(1, function() {
    throw new Error('throw in callback');
  })
});

