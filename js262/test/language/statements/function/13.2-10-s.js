

/*---
es5id: 13.2-10-s
description: >
    StrictMode - writing a property named 'caller' of function objects
    is not allowed outside the function
---*/

var foo = Function("'use strict';");

assert.throws(TypeError, function() {
    foo.caller = 41;
});
