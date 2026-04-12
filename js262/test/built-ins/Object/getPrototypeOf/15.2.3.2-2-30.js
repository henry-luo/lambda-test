

/*---
es5id: 15.2.3.2-2-30
description: >
    Object.getPrototypeOf returns the [[Prototype]] of its parameter
    (the global object)
---*/

var proto = Object.getPrototypeOf(this);

assert.sameValue(proto.isPrototypeOf(this), true, 'proto.isPrototypeOf(this)');
