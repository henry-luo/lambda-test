

/*---
es5id: 15.3.4.5-9-1
description: Function.prototype.bind, [[Prototype]] is Function.prototype
---*/

function foo() {}
var o = {};

var bf = foo.bind(o);

assert(Function.prototype.isPrototypeOf(bf), 'Function.prototype.isPrototypeOf(bf) !== true');
