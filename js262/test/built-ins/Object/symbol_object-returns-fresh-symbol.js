

/*---
es6id: 19.1.1.1_S3
description: >
    Object(sym) returns a fresh Symbol object
features: [Symbol]
---*/
var symA = Symbol('A');
var symB = Symbol();

assert.notSameValue(Object(symA), symA, "The value of `Object(symA)` is not `symA`");
assert.notSameValue(Object(symB), symB, "The value of `Object(symB)` is not `symB`");
