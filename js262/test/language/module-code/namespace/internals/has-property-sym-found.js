

/*---
esid: sec-module-namespace-exotic-objects-hasproperty-p
description: >
    Behavior of the [[HasProperty]] internal method with a symbol argument that
    can be found
info: |
    1. If Type(P) is Symbol, return OrdinaryHasProperty(O, P).
flags: [module]
features: [Symbol.toStringTag, Reflect]
---*/

import * as ns from './has-property-sym-found.js';

assert(Symbol.toStringTag in ns, 'in: Symbol.toStringTag');
assert(Reflect.has(ns, Symbol.toStringTag), 'Reflect.has: Symbol.toStringTag');
