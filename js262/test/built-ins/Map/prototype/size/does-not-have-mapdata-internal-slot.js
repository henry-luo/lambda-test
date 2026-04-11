

/*---
esid: sec-get-map.prototype.size
description: >
  Throws a TypeError if `this` object does not have a [[MapData]] internal slot.
info: |
  get Map.prototype.size

  1. Let M be the this value.
  2. If Type(M) is not Object, throw a TypeError exception.
  3. If M does not have a [[MapData]] internal slot, throw a TypeError
  exception.
  ...
---*/

var descriptor = Object.getOwnPropertyDescriptor(Map.prototype, 'size');

var map = new Map();


descriptor.get.call(map);

assert.throws(TypeError, function() {
  descriptor.get.call([]);
});
