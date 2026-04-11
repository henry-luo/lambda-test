

/*---
es5id: 15.2.3.13-2-13
description: >
    Object.isExtensible returns true for all built-in objects
    (Function.constructor)
---*/

var e = Object.isExtensible(Function.constructor);

assert.sameValue(e, true, 'e');
