

/*---
es5id: 15.2.3.3-2-12
description: >
    Object.getOwnPropertyDescriptor - argument 'P' is a number that
    converts to a string (value is negative number)
---*/

var obj = {
  "-20": 1
};

var desc = Object.getOwnPropertyDescriptor(obj, -20);

assert.sameValue(desc.value, 1, 'desc.value');
