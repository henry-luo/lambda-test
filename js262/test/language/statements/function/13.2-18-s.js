

/*---
es5id: 13.2-18-s
description: >
    StrictMode - writing a property named 'arguments' of function
    objects is not allowed outside the function
---*/

var foo = Function("'use strict';");

assert.throws(TypeError, function() {
    foo.arguments = 41;
});
