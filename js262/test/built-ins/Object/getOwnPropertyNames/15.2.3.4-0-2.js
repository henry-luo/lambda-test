

/*---
es5id: 15.2.3.4-0-2
description: >
    Object.getOwnPropertyNames must exist as a function taking 1
    parameter
---*/

assert.sameValue(Object.getOwnPropertyNames.length, 1, 'Object.getOwnPropertyNames.length');
