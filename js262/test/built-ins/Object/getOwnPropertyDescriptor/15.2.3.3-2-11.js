

/*---
es5id: 15.2.3.3-2-11
description: >
    Object.getOwnPropertyDescriptor - argument 'P' is a number that
    converts to a string (value is positive number)
---*/

var obj = {
  "30": 1
};

var desc = Object.getOwnPropertyDescriptor(obj, 30);

assert.sameValue(desc.value, 1, 'desc.value');
