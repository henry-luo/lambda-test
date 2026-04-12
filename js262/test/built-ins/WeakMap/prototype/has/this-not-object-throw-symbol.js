

/*---
esid: sec-weakmap.prototype.has
description: Throws TypeError if `this` is not Object.
info: |
  WeakMap.prototype.has ( value )

  1. Let M be the this value.
  2. If Type(M) is not Object, throw a TypeError exception.
features: [Symbol]
---*/

assert.throws(TypeError, function() {
  WeakMap.prototype.has.call(Symbol(), {});
});

assert.throws(TypeError, function() {
  var map = new WeakMap();
  map.has.call(Symbol(), {});
});
