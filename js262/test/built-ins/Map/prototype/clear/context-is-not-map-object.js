

/*---
esid: sec-map.prototype.clear
description: >
  Throws a TypeError if `this` does not have a [[MapData]] internal slot.
info: |
  Map.prototype.clear ( )

  1. Let M be the this value.
  2. If Type(M) is not Object, throw a TypeError exception.
  3. If M does not have a [[MapData]] internal slot, throw a TypeError
  exception.
  ...
---*/

assert.throws(TypeError, function() {
  Map.prototype.clear.call({});
});

assert.throws(TypeError, function() {
  Map.prototype.clear.call([]);
});
