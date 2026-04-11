

/*---
es5id: 13.1-2-2
description: >
    eval allowed as formal parameter name of a non-strict function
    expression
flags: [noStrict]
---*/

(function foo(eval){});
