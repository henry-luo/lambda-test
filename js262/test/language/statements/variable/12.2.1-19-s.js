

/*---
es5id: 12.2.1-19-s
description: >
    A direct eval assigning into 'arguments' throws SyntaxError in
    strict mode
flags: [onlyStrict]
---*/


assert.throws(SyntaxError, function() {
    eval('arguments = 42;');
});
