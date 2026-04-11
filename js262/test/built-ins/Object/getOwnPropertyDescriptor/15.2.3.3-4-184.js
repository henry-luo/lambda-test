

/*---
es5id: 15.2.3.3-4-184
description: >
    Object.getOwnPropertyDescriptor returns undefined for non-existent
    property (caller) on built-in object (Math)
---*/

var desc = Object.getOwnPropertyDescriptor(Math, "caller");

assert.sameValue(desc, undefined, 'desc');
