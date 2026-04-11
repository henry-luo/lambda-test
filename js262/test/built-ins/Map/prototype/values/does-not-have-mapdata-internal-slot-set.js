

/*---
esid: sec-map.prototype.values
description: >
  Throws a TypeError if `this` is a Set object.
info: |
  Map.prototype.values ()

  1. Let M be the this value.
  2. Return CreateMapIterator(M, "value").

  23.1.5.1 CreateMapIterator Abstract Operation

  ...
  2. If map does not have a [[MapData]] internal slot, throw a TypeError
  exception.
  ...
features: [Set]
---*/

assert.throws(TypeError, function() {
  Map.prototype.values.call(new Set());
});

assert.throws(TypeError, function() {
  var m = new Map();
  m.values.call(new Set());
});
