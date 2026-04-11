

/*---
es5id: 15.3.2.1-11-3
description: >
    Function constructor may have a formal parameter named 'eval' if
    body is not strict mode
---*/

Function('eval', 'return;');
