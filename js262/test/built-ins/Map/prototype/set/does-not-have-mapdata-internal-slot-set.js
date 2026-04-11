

/*---
esid: sec-map.prototype.set
description: >
  Throws a TypeError if `this` is a Set object.
info: |
  Map.prototype.set ( key , value )

  ...
  3. If M does not have a [[MapData]] internal slot, throw a TypeError
  exception.
  ...
features: [Set]
---*/

assert.throws(TypeError, function() {
  Map.prototype.set.call(new Set(), 1, 1);
});

assert.throws(TypeError, function() {
  var m = new Map();
  m.set.call(new Set(), 1, 1);
});
