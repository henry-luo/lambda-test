

/*---
es5id: 15.2.3.3-2-40
description: >
    Object.getOwnPropertyDescriptor - argument 'P' is a Boolean Object
    that converts to a string
---*/

var obj = {
  "true": 1
};

var desc = Object.getOwnPropertyDescriptor(obj, new Boolean(true));

assert.sameValue(desc.value, 1, 'desc.value');
