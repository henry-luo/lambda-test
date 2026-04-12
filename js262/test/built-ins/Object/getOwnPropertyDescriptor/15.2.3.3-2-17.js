

/*---
es5id: 15.2.3.3-2-17
description: >
    Object.getOwnPropertyDescriptor - argument 'P' is a number that
    converts to a string (value is 1(following 21 zeros))
---*/

var obj = {
  "1e+21": 1
};

var desc = Object.getOwnPropertyDescriptor(obj, 1000000000000000000000);

assert.sameValue(desc.value, 1, 'desc.value');
