

/*---
es5id: 15.2.3.3-4-110
description: >
    Object.getOwnPropertyDescriptor returns data desc for functions on
    built-ins (Math.round)
---*/

var desc = Object.getOwnPropertyDescriptor(Math, "round");

assert.sameValue(desc.value, Math.round, 'desc.value');
assert.sameValue(desc.writable, true, 'desc.writable');
assert.sameValue(desc.enumerable, false, 'desc.enumerable');
assert.sameValue(desc.configurable, true, 'desc.configurable');
