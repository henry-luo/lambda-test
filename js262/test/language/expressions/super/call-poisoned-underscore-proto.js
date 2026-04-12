

/*---
esid: prod-SuperCall
description: >
  SuperCall should directly invoke [[GetPrototypeOf]] internal method.
info: |
  GetSuperConstructor ( )

  [...]
  5. Let superConstructor be ! activeFunction.[[GetPrototypeOf]]().
features: [class]
---*/

Object.defineProperty(Object.prototype, '__proto__', {
  get: function() {
    throw new Test262Error('should not be called');
  },
});

class A extends Array {}

assert.sameValue(new A(1).length, 1);
