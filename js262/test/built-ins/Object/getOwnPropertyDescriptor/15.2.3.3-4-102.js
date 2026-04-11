

/*---
es5id: 15.2.3.3-4-102
description: >
    Object.getOwnPropertyDescriptor returns data desc for functions on
    built-ins (Math.cos)
---*/

var desc = Object.getOwnPropertyDescriptor(Math, "cos");

assert.sameValue(desc.value, Math.cos, 'desc.value');
assert.sameValue(desc.writable, true, 'desc.writable');
assert.sameValue(desc.enumerable, false, 'desc.enumerable');
assert.sameValue(desc.configurable, true, 'desc.configurable');
