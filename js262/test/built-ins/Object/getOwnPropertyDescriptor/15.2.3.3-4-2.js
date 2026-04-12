

/*---
es5id: 15.2.3.3-4-2
description: >
    Object.getOwnPropertyDescriptor returns undefined for non-existent
    properties
---*/

var o = {};

var desc = Object.getOwnPropertyDescriptor(o, "foo");

assert.sameValue(desc, undefined, 'desc');
