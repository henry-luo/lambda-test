

/*---
es5id: 12.2.1-8-s
description: >
    eval - a direct eval assigning into 'eval' throws SyntaxError in
    strict mode
flags: [onlyStrict]
---*/


assert.throws(SyntaxError, function() {
    eval('eval = 42;');
});
