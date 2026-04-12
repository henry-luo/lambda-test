

/*---
es5id: 15.2.3.3-2-6
description: >
    Object.getOwnPropertyDescriptor - argument 'P' is a boolean whose
    value is true
---*/

var obj = {
  "true": 1
};

var desc = Object.getOwnPropertyDescriptor(obj, true);

assert.sameValue(desc.value, 1, 'desc.value');
