

/*---
es5id: 13.2-9-s
description: >
    StrictMode - reading a property named 'caller' of function objects
    is not allowed outside the function
flags: [noStrict]
---*/

var foo = Function("'use strict';");

assert.throws(TypeError, function() {
    var temp = foo.caller;
});
