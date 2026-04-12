

/*---
es5id: 12.2.1-7-s
description: >
    eval - a direct eval declaring a var named 'eval' throws
    SyntaxError in strict mode
flags: [onlyStrict]
---*/


assert.throws(SyntaxError, function() {
    eval('var eval;');
});
