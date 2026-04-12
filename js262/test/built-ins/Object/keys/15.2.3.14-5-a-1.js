

/*---
es5id: 15.2.3.14-5-a-1
description: >
    Object.keys - 'value' attribute of element in returned array is
    correct.
---*/

var obj = {
  prop1: 1
};

var array = Object.keys(obj);

var desc = Object.getOwnPropertyDescriptor(array, "0");

assert(desc.hasOwnProperty("value"), 'desc.hasOwnProperty("value") !== true');
assert.sameValue(desc.value, "prop1", 'desc.value');
