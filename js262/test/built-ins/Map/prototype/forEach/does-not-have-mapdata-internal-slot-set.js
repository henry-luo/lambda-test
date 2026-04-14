

/*---
esid: sec-map.prototype.forEach
description: >
  Throws a TypeError if `this` is a Set object.
info: |
  Map.prototype.forEach ( callbackfn [ , thisArg ] )

  ...
  3. If M does not have a [[MapData]] internal slot, throw a TypeError
  exception.
  ...
features: [Set]
---*/

assert.throws(TypeError, function() {
  Map.prototype.forEach.call(new Set(), function() {});
});

assert.throws(TypeError, function() {
  var m = new Map();
  m.forEach.call(new Set(), function() {});
});
