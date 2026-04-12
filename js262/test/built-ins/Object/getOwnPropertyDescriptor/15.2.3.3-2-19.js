

/*---
es5id: 15.2.3.3-2-19
description: >
    Object.getOwnPropertyDescriptor - argument 'P' is a number that
    converts to a string (value is 1e+20)
---*/

var obj = {
  "100000000000000000000": 1
};

var desc = Object.getOwnPropertyDescriptor(obj, 1e+20);

assert.sameValue(desc.value, 1, 'desc.value');
