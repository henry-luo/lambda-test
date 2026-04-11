

/*---
es5id: 15.2.3.3-4-191
description: >
    Object.getOwnPropertyDescriptor returns data desc for properties
    on built-ins (String.length)
---*/

var desc = Object.getOwnPropertyDescriptor(String, "length");

assert.sameValue(desc.writable, false, 'desc.writable');
assert.sameValue(desc.enumerable, false, 'desc.enumerable');
assert.sameValue(desc.configurable, true, 'desc.configurable');
assert.sameValue(desc.hasOwnProperty('get'), false, 'desc.hasOwnProperty("get")');
assert.sameValue(desc.hasOwnProperty('set'), false, 'desc.hasOwnProperty("set")');
