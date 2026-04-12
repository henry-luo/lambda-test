

/*---
description: The prototype of WeakRef.prototype is Object.prototype
esid: sec-properties-of-the-weak-ref-prototype-object
info: |
  The value of the [[Prototype]] internal slot of the WeakRef prototype object
  is the intrinsic object %ObjectPrototype%.
features: [WeakRef]
---*/

var proto = Object.getPrototypeOf(WeakRef.prototype);
assert.sameValue(proto, Object.prototype);
