

/*---
description: The prototype of DisposableStack.prototype is Object.prototype
esid: sec-properties-of-the-disposablestack-prototype-object
info: |
  The value of the [[Prototype]] internal slot of the DisposableStack prototype object
  is the intrinsic object %Object.prototype%.
features: [explicit-resource-management]
---*/

var proto = Object.getPrototypeOf(DisposableStack.prototype);
assert.sameValue(proto, Object.prototype);
