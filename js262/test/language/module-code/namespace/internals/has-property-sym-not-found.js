

/*---
esid: sec-module-namespace-exotic-objects-hasproperty-p
description: >
    Behavior of the [[HasProperty]] internal method with a symbol argument that
    cannot be found
info: |
    1. If Type(P) is Symbol, return OrdinaryHasProperty(O, P).
flags: [module]
features: [Symbol, Reflect]
---*/

import * as ns from './has-property-sym-not-found.js';
var sym = Symbol('test262');

assert.sameValue(sym in ns, false, 'in');
assert.sameValue(Reflect.has(ns, sym), false, 'Reflect.has');
