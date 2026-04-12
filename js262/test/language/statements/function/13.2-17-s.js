

/*---
es5id: 13.2-17-s
description: >
    StrictMode - reading a property named 'arguments' of function
    objects is not allowed outside the function
---*/

var foo = Function("'use strict';");

assert.throws(TypeError, function() {
    var temp = foo.arguments;
});
