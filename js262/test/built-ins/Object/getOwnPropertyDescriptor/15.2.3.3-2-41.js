

/*---
es5id: 15.2.3.3-2-41
description: >
    Object.getOwnPropertyDescriptor - argument 'P' is a Number Object
    that converts to a string
---*/

var obj = {
  "123": 1
};

var desc = Object.getOwnPropertyDescriptor(obj, new Number(123));

assert.sameValue(desc.value, 1, 'desc.value');
