

/*---
es5id: 15.2.3.4-4-b-1
description: >
    Object.getOwnPropertyNames - descriptor of resultant array is all
    true
---*/

var obj = new Object();
obj.x = 1;
obj.y = 2;
var result = Object.getOwnPropertyNames(obj);
var desc = Object.getOwnPropertyDescriptor(result, "0");

assert.sameValue(desc.enumerable, true, 'desc.enumerable');
assert.sameValue(desc.configurable, true, 'desc.configurable');
assert.sameValue(desc.writable, true, 'desc.writable');
