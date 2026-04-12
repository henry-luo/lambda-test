

/*---
esid: sec-properties-of-the-weakmap-prototype-object
description: >
  The WeakMap.prototype's prototype is Object.prototype.
info: |
  23.3.3 Properties of the WeakMap Prototype Object

  The WeakMap prototype object is the intrinsic object %WeakMapPrototype%. The
  value of the [[Prototype]] internal slot of the WeakMap prototype object is
  the intrinsic object %ObjectPrototype% (19.1.3). The WeakMap prototype object
  is an ordinary object. It does not have a [[WeakMapData]] internal slot.
---*/

assert.sameValue(
  Object.getPrototypeOf(WeakMap.prototype),
  Object.prototype,
  '`Object.getPrototypeOf(WeakMap.prototype)` returns `Object.prototype`'
);
