

/*---
esid: sec-weakmap.prototype.set
description: Throws TypeError if `this` is not Object.
info: |
  WeakMap.prototype.set ( key, value )

  1. Let M be the this value.
  2. If Type(M) is not Object, throw a TypeError exception.
features: [Symbol]
---*/

assert.throws(TypeError, function() {
  WeakMap.prototype.set.call(Symbol(), {}, 1);
});

assert.throws(TypeError, function() {
  var map = new WeakMap();
  map.set.call(Symbol(), {}, 1);
});
