

/*---
es5id: 15.2.3.3-3-15
description: >
    Object.getOwnPropertyDescriptor applied to a Function object which
    implements its own property get method
---*/

var obj = function(a, b) {
  return a + b;
};
obj[1] = "ownProperty";

var desc = Object.getOwnPropertyDescriptor(obj, "1");

assert.sameValue(desc.value, "ownProperty", 'desc.value');
