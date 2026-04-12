

/*---
esid: sec-weakmap.prototype.set
description: Returns `this` after setting a new value.
info: |
  WeakMap.prototype.set ( key, value )

  1. Let M be this value.
  ...
  9. Return M.

---*/

var map = new WeakMap();

assert.sameValue(map.set({}, 1), map, '`map.set({}, 1)` returns `map`');
