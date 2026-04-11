

/*---
es5id: 15.2.3.3-2-33
description: >
    Object.getOwnPropertyDescriptor - argument 'P' is applied to
    string 'AB  \cd'
---*/

var obj = {
  "AB\n\\cd": 1
};

var desc = Object.getOwnPropertyDescriptor(obj, "AB\n\\cd");

assert.sameValue(desc.value, 1, 'desc.value');
