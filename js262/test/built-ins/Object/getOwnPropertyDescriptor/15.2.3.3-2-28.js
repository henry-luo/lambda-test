

/*---
es5id: 15.2.3.3-2-28
description: >
    Object.getOwnPropertyDescriptor - argument 'P' is an integer that
    converts to a string (value is 123)
---*/

var obj = {
  "123": 1
};

var desc = Object.getOwnPropertyDescriptor(obj, 123);

assert.sameValue(desc.value, 1, 'desc.value');
