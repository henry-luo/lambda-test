

/*---
es6id: 19.2.3.6
description: Error thrown when accessing `prototype` property of `this` value
info: |
    1. Let F be the this value.
    2. Return OrdinaryHasInstance(F, V).

    7.3.19 OrdinaryHasInstance (C, O)

    [...]
    4. Let P be Get(C, "prototype").
    5. ReturnIfAbrupt(P).
features: [Symbol.hasInstance]
---*/


var f = Object.getOwnPropertyDescriptor({
  get f() {}
}, 'f').get;

Object.defineProperty(f, 'prototype', {
  get: function() {
    throw new Test262Error();
  }
});

assert.throws(Test262Error, function() {
  f[Symbol.hasInstance]({});
});
