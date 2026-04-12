

/*---
esid: sec-properties-of-the-weakset-prototype-object
description: >
  The WeakSet.prototype's prototype is Object.prototype.
info: |
  23.4.3 Properties of the WeakSet Prototype Object

  The WeakSet prototype object is the intrinsic object %WeakSetPrototype%. The
  value of the [[Prototype]] internal slot of the WeakSet prototype object is
  the intrinsic object %ObjectPrototype% (19.1.3). The WeakSet prototype
  object is an ordinary object. It does not have a [[WeakSetData]] internal
  slot.
---*/

assert.sameValue(
  Object.getPrototypeOf(WeakSet.prototype),
  Object.prototype,
  '`Object.getPrototypeOf(WeakSet.prototype)` returns `Object.prototype`'
);
