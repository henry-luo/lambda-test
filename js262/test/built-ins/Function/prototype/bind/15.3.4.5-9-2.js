

/*---
es5id: 15.3.4.5-9-2
description: >
    Function.prototype.bind, [[Prototype]] is Function.prototype
    (using getPrototypeOf)
---*/

function foo() {}
var o = {};

var bf = foo.bind(o);

assert.sameValue(Object.getPrototypeOf(bf), Function.prototype, 'Object.getPrototypeOf(bf)');
