

/*---
esid: sec-shadowrealm.prototype.importvalue
description: >
  The [[Prototype]] of ShadowRealm.prototype.importValue is AsyncFunction.Prototype.
info: |
  Unless otherwise specified every built-in function and every built-in constructor
  has the Function prototype object, which is the initial value of the expression
  Function.prototype, as the value of its [[Prototype]] internal slot.

features: [ShadowRealm]
---*/

assert.sameValue(Object.getPrototypeOf(ShadowRealm.prototype.importValue), Function.prototype);
