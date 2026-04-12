

/*---
es5id: 15.3.2.1-11-5
description: >
    Duplicate combined parameter name in Function constructor allowed
    if body is not strict
---*/

Function('a,a', 'return;');
