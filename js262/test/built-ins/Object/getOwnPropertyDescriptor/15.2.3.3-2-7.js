

/*---
es5id: 15.2.3.3-2-7
description: >
    Object.getOwnPropertyDescriptor - argument 'P' is a number that
    converts to a string (value is NaN)
---*/

var obj = {
  "NaN": 1
};

var desc = Object.getOwnPropertyDescriptor(obj, NaN);

assert.sameValue(desc.value, 1, 'desc.value');
