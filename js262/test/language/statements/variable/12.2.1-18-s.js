

/*---
es5id: 12.2.1-18-s
description: >
    A direct eval declaring a var named 'arguments' throws SyntaxError
    in strict mode
flags: [onlyStrict]
---*/


assert.throws(SyntaxError, function() {
    eval('var arguments;');
});
