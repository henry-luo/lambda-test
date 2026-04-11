

/*---
es5id: 12.2.1-3-s
description: >
    eval - a function expr declaring a var named 'eval' throws
    SyntaxError in strict mode
flags: [onlyStrict]
---*/


assert.throws(SyntaxError, function() {
    eval('(function () { var eval; })');
});
