

/*---
es5id: 15.3.2.1-11-2-s
description: >
    Duplicate seperate parameter name in Function constructor called
    from strict mode allowed if body not strict
flags: [onlyStrict]
---*/

Function('a', 'a', 'return;');
