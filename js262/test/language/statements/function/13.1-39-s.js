

/*---
es5id: 13.1-39-s
description: >
    StrictMode - SyntaxError is thrown if 'arguments' occurs as the
    function name of a FunctionDeclaration in strict eval code
flags: [noStrict]
---*/


assert.throws(SyntaxError, function() {
    eval("'use strict'; function arguments() { };")
});
