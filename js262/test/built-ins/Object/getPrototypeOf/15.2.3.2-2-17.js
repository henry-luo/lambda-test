

/*---
es5id: 15.2.3.2-2-17
description: >
    Object.getPrototypeOf returns the [[Prototype]] of its parameter
    (URIError)
---*/

assert.sameValue(Object.getPrototypeOf(URIError), Error, 'Object.getPrototypeOf(URIError)');
