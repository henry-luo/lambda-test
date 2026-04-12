

/*---
es5id: 15.7.3-1
description: Number constructor - [[Prototype]] is the Function prototype object
---*/

assert.sameValue(Function.prototype.isPrototypeOf(Number), true, 'Function.prototype.isPrototypeOf(Number)');
