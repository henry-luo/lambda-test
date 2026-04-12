

/*---
es5id: 10.6-13-c-1-s
description: >
    Accessing callee property of Arguments object throws TypeError in
    strict mode
flags: [onlyStrict]
---*/


assert.throws(TypeError, function() {
    arguments.callee;
});
