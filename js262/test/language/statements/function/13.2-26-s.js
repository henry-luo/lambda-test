

/*---
es5id: 13.2-26-s
description: >
    StrictMode - writing a property named 'arguments' of function
    objects is not allowed outside the function
flags: [noStrict]
---*/

function foo () {"use strict";}

assert.throws(TypeError, function() {
    foo.arguments = 41;
});
