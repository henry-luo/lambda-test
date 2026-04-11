

/*---
es6id: 23.1.3
description: >
  The prototype of Map.prototype is Object.prototype.
info: |
  The Map prototype object is the intrinsic object %MapPrototype%. The value
  of the [[Prototype]] internal slot of the Map prototype object is the
  intrinsic object %ObjectPrototype% (19.1.3). The Map prototype object is an
  ordinary object. It does not have a [[MapData]] internal slot.
---*/

assert.sameValue(
  Object.getPrototypeOf(Map.prototype),
  Object.prototype,
  'Object.getPrototypeOf(Map.prototype) returns Object.prototype'
);
