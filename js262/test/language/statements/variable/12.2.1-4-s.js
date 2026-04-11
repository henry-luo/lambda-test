

/*---
es5id: 12.2.1-4-s
description: >
    eval - a function expr assigning into 'eval' throws a SyntaxError
    in strict mode
flags: [onlyStrict]
---*/


assert.throws(SyntaxError, function() {
    eval('(function () { eval = 42; })()');
});
