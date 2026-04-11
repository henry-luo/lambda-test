

/*---
es5id: 13.1-37-s
description: >
    StrictMode - SyntaxError is thrown if 'eval' occurs as the
    Identifier of a FunctionExpression in strict eval code
flags: [noStrict]
---*/

        var _13_1_37_s = {};
assert.throws(SyntaxError, function() {
            eval("'use strict'; _13_1_37_s.x = function eval() {};");
});
