

/*---
es5id: 15.7.3-2
description: >
    Number constructor - [[Prototype]] is the Function prototype
    object (using getPrototypeOf)
---*/

var p = Object.getPrototypeOf(Number);

assert.sameValue(p, Function.prototype, 'p');
