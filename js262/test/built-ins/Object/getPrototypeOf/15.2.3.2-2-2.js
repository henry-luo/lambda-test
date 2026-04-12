

/*---
info: |
    Let 'x' be the return value from getPrototypeOf when called on d.
    Then, x.isPrototypeOf(d) must be true.
es5id: 15.2.3.2-2-2
description: >
    Object.getPrototypeOf returns the [[Prototype]] of its parameter
    (custom object)
---*/

function base() {}

function derived() {}
derived.prototype = new base();

var d = new derived();
var x = Object.getPrototypeOf(d);

assert.sameValue(x.isPrototypeOf(d), true, 'x.isPrototypeOf(d)');
