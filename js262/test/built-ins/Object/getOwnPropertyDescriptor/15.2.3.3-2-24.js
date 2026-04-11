

/*---
es5id: 15.2.3.3-2-24
description: >
    Object.getOwnPropertyDescriptor - argument 'P' is a number that
    converts to a string (value is 0.00000001)
---*/

var obj = {
  "1e-8": 1
};

var desc = Object.getOwnPropertyDescriptor(obj, 0.00000001);

assert.sameValue(desc.value, 1, 'desc.value');
