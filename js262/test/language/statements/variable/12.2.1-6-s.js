

/*---
es5id: 12.2.1-6-s
description: >
    eval - a Function assigning into 'eval' will not throw any error
    if contained within strict mode and its body does not start with
    strict mode
flags: [onlyStrict]
---*/

    var f = Function('eval = 42;');
    f();
