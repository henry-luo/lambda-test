

/*---
esid: sec-map.prototype.forEach
description: >
  Throws a TypeError if `this` is a WeakMap object.
info: |
  Map.prototype.forEach ( callbackfn [ , thisArg ] )

  ...
  3. If M does not have a [[MapData]] internal slot, throw a TypeError
  exception.
  ...
features: [WeakMap]
---*/

assert.throws(TypeError, function() {
  Map.prototype.forEach.call(new WeakMap(), function() {});
});

assert.throws(TypeError, function() {
  var m = new Map();
  m.forEach.call(new WeakMap(), function() {});
});
