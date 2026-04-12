

/*---
es5id: 15.2.3.7-0-2
description: >
    Object.defineProperties must exist as a function taking 2
    parameters
---*/

assert.sameValue(Object.defineProperties.length, 2, 'Object.defineProperties.length');
