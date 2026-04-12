

/*---
description: The prototype of FinalizationRegistry.prototype is Object.prototype
esid: sec-properties-of-the-finalization-registry-prototype-object
info: |
  The value of the [[Prototype]] internal slot of the FinalizationRegistry prototype object
  is the intrinsic object %ObjectPrototype%.
features: [FinalizationRegistry]
---*/

var proto = Object.getPrototypeOf(FinalizationRegistry.prototype);
assert.sameValue(proto, Object.prototype);
