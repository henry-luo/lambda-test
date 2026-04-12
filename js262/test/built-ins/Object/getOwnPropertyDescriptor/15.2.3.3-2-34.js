

/*---
es5id: 15.2.3.3-2-34
description: >
    Object.getOwnPropertyDescriptor - argument 'P' is applied to
    string 'undefined'
---*/

var obj = {
  "undefined": 1
};

var desc = Object.getOwnPropertyDescriptor(obj, "undefined");

assert.sameValue(desc.value, 1, 'desc.value');
