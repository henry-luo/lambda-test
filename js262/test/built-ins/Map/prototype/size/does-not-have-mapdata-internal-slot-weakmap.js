

/*---
esid: sec-get-map.prototype.size
description: >
  Throws a TypeError if `this` is a WeakMap object.
info: |
  get Map.prototype.size

  1. Let M be the this value.
  2. If Type(M) is not Object, throw a TypeError exception.
  3. If M does not have a [[MapData]] internal slot, throw a TypeError
  exception.
  ...
features: [WeakMap]
---*/

var descriptor = Object.getOwnPropertyDescriptor(Map.prototype, 'size');

var map = new Map();


descriptor.get.call(map);

assert.throws(TypeError, function() {
  descriptor.get.call(new WeakMap());
});
