

/*---
es5id: 13.2-6-s
description: >
    StrictMode - writing a property named 'caller' of function objects
    is not allowed outside the function
flags: [noStrict]
---*/

var foo = new Function("'use strict';");

assert.throws(TypeError, function() {
    foo.caller = 41;
});
