

/*---
description: The prototype of AsyncDisposableStack.prototype is Object.prototype
esid: sec-properties-of-the-asyncdisposablestack-prototype-object
info: |
  The value of the [[Prototype]] internal slot of the AsyncDisposableStack prototype object
  is the intrinsic object %Object.prototype%.
features: [explicit-resource-management]
---*/

var proto = Object.getPrototypeOf(AsyncDisposableStack.prototype);
assert.sameValue(proto, Object.prototype);
