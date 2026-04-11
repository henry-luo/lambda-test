

/*---
es5id: 15.2.3.3-2-1
description: >
    Object.getOwnPropertyDescriptor returns undefined for undefined
    property name
---*/

var o = {};
var desc = Object.getOwnPropertyDescriptor(o, undefined);

assert.sameValue(desc, undefined, 'desc');
