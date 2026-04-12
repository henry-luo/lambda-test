

/*---
es5id: 15.2.3.3-2-2
description: >
    Object.getOwnPropertyDescriptor returns undefined for null
    property name
---*/

var o = {};
var desc = Object.getOwnPropertyDescriptor(o, null);

assert.sameValue(desc, undefined, 'desc');
