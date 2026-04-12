

/*---
es5id: 15.2.3.3-2-16
description: >
    Object.getOwnPropertyDescriptor - argument 'P' is a number that
    converts to a string (value is 1(following 20 zeros))
---*/

var obj = {
  "100000000000000000000": 1
};

var desc = Object.getOwnPropertyDescriptor(obj, 100000000000000000000);

assert.sameValue(desc.value, 1, 'desc.value');
