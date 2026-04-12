

/*---
esid: sec-map.prototype.has
description: >
  Throws a TypeError if `this` is a WeakMap object.
info: |
  Map.prototype.has ( key )

  ...
  3. If M does not have a [[MapData]] internal slot, throw a TypeError
  exception.
  ...
features: [WeakMap]
---*/

assert.throws(TypeError, function() {
  Map.prototype.has.call(new WeakMap(), 1);
});

assert.throws(TypeError, function() {
  var m = new Map();
  m.has.call(new WeakMap(), 1);
});
