

/*---
es5id: 15.3.2.1-11-6-s
description: >
    Duplicate combined parameter name allowed in Function constructor
    called in strict mode if body not strict
flags: [onlyStrict]
---*/

Function('a,a', 'return a;');
