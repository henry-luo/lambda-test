

/*---
esid: proposal-upsert
description: |
  WeakMap.getOrInsertComputed throws when callbackfn throws return if abrubt completion Call(callbackfn, key)
info: |
  WeakMap.prototype.getOrInsertComputed ( key , callbackfn )

  ...
  6. Let value be ? Call(callbackfn, undefined, key).
  ...
features: [upsert]
flags: [noStrict]
---*/
var map = new WeakMap();

var bar = {};

assert.throws(Error, function() {
  map.getOrInsertComputed(bar, function() {
    throw new Error('throw in callback');
  })
}, Error);

