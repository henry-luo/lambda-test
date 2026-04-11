

/*---
es5id: 15.2.3.3-4-103
description: >
    Object.getOwnPropertyDescriptor returns data desc for functions on
    built-ins (Math.exp)
---*/

var desc = Object.getOwnPropertyDescriptor(Math, "exp");

assert.sameValue(desc.value, Math.exp, 'desc.value');
assert.sameValue(desc.writable, true, 'desc.writable');
assert.sameValue(desc.enumerable, false, 'desc.enumerable');
assert.sameValue(desc.configurable, true, 'desc.configurable');
