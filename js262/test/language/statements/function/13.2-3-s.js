

/*---
es5id: 13.2-3-s
description: >
    StrictMode - Writing or reading from a property named 'arguments'
    of function objects is allowed under both strict and normal modes.
---*/

var foo = function () {
    this.arguments = 12;
}
var obj = new foo();

assert.sameValue(obj.arguments, 12, 'obj.arguments');
