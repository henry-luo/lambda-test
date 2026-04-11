

/*---
es5id: 15.2.3.10-0-2
description: >
    Object.preventExtensions must exist as a function taking 1
    parameter
---*/

assert.sameValue(Object.preventExtensions.length, 1, 'Object.preventExtensions.length');
